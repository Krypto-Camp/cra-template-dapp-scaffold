import { useContractRead, useContractWrite } from "wagmi";
import Layout from "../components/Layout";
import { contractABI, contractAddress } from "../configs/contract";

const Homepage = () => {
  const { data: counter, isLoadingCounter } = useContractRead(
    {
      addressOrName: contractAddress,
      contractInterface: contractABI,
    },
    "counter",
    { watch: true }
  );

  const {
    isLoading: isLoadingSetIncrement,
    error: errorSetIncrement,
    write: setIncrement,
  } = useContractWrite(
    {
      addressOrName: contractAddress,
      contractInterface: contractABI,
    },
    "setIncrement"
  );

  return (
    <Layout>
      <div className="d-flex flex-column align-items-center justify-content-center my-5">
        <div>Demo Page</div>
        <div>
          Counter: {counter.toString()} {isLoadingCounter && "(Loading...)"}
        </div>
        <button onClick={setIncrement}>
          <span>+1</span>
          {isLoadingSetIncrement && <span> (Loading...) </span>}
        </button>

        {errorSetIncrement && <div>{errorSetIncrement.message}</div>}
      </div>
    </Layout>
  );
};

export default Homepage;
