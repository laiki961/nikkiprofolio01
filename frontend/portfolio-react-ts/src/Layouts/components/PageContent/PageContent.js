import classes from "./PageContent.module.css";

function PageContent({ title, children }) {
  return (
    <section id={classes["page-content"]}>
      <div className={classes["page-content"]}>
        <h1>{title}</h1>
        {children}
      </div>
    </section>
  );
}

export default PageContent;
