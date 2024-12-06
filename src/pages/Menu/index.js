import { useEffect, useState } from "react";
import api from "../../api";
import ItemMenu from "../../components/ItemMenu";
import "./Menu.css";
import { Backdrop, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeBackDrop, openBackDrop } from "../../redux/action";
import { debounce } from "lodash";

function Menu() {
  const [listItem, setListItem] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const dispatch = useDispatch();
  const open = useSelector(state => state.backdropAction);

  async function getMenu(newPage = page) {
    try {
      dispatch(openBackDrop());
      const response = await api.get(
        `menu?keyword=&sortKey=&sortValue=&page=${newPage}`
      );
      const data = response.data.data;
      if (Array.isArray(data) && data.length > 0) {
        data.forEach(item => {
          item.quantity = 1;
          item.totalPrice = item.price;
        })
        setListItem((prev) => [...prev, ...data]);
      }
      else {
        setHasMore(false); // Không còn dữ liệu mới
      }
      dispatch(closeBackDrop());
    } catch (e) {
      console.error(e);
      setHasMore(false);
    }
  }

  useEffect(() => {
    getMenu();
  }, []);

  // Lắng nghe sự kiện scroll của window
  useEffect(() => {
    if (!hasMore) return;
    const handleScroll = debounce(() => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      // Kiểm tra nếu người dùng cuộn xuống cách đáy màn hình chính <= 100px
      if (scrollTop + clientHeight >= scrollHeight - 100) {
        setPage((prevPage) => {
          const newPage = prevPage + 1;
          getMenu(newPage);
          return newPage;
        });
      }
    }, 300);

    // Thêm sự kiện scroll vào window
    window.addEventListener("scroll", handleScroll);

    // Cleanup sự kiện khi component bị hủy
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasMore]);

  return (
    <>
    <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <section className="container-menu">
        <div className="title-menu">Chọn thức ăn</div>
        {listItem.length > 0?
        <div className="content-menu">
          {listItem.map((item, index) => (
            <ItemMenu key={index} item={item} />
          ))}
        </div> : <></>
        }
      </section>
    </>
  );
}

export default Menu;
