import loadingStyle from "./Loading.module.css";
function Loading() {
  return (
    <div className={loadingStyle.container}>
      <img src="/assets/svg/loading.svg" alt="loading" />
    </div>
  );
}
export default Loading;
