import styles from "../styles/Home.module.css";
export default function Todos({ loading, error, data }) {
  if (loading) return <p>Loading...</p>;
  if (error) console.log(error);
  return (
    <div className={styles.grid}>
      {data.todos.map((todo) => (
        <a href="#" key={todo.id} className={styles.card}>
          <h2>{todo.title} &rarr;</h2>
          <p>This is the description for this todo item</p>
        </a>
      ))}
    </div>
  );
}
