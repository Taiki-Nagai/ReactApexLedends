import getApex from '../features/getApex';

const Main = () => {
  const onClick = async () => {
    const legends = await getApex();
    console.log(legends);
  };
  return (
    <div>
      <button className="getData" onClick={onClick}>
        API実行
      </button>
    </div>
  );
};

export default Main;
