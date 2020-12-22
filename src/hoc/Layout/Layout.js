export default function Layout (props) {
  return(
    <div>
      <p>Component Layout</p>
      <main>
        {props.children}
      </main>
    </div>
  );
}
