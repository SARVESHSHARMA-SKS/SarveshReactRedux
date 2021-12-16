import styles from "./Category.module.css";
function Category({ title, imageUrl }) {
  return (
    <div
      style={{
        display: "flex"
      }}
      className={styles["blue-text"]}
    >
      <img style={{ flexDirection: "row" }} src={imageUrl} alt="noimage" />
      <h1 style={{ flexDirection: "row" }}>{title}</h1>
    </div>
  );
}
export default Category;
