const ErrorExample = () => {

  let count = 0;

  const handleClick = () => {
    count = count + 1;
  }

  return (
    <>
    <h2>{count}</h2>
    <button type="buttton" className="btn" onClick={handleClick}>Increase</button>
    </>
    );
};

export default ErrorExample;
