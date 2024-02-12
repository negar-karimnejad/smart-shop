import { Toaster } from "react-hot-toast";

function HotToastContext() {
  return (
    <Toaster
      toastOptions={{
        style: {
          background: "rgb(51 65 85",
          color: "#fff",
        },
      }}
    />
  );
}

export default HotToastContext;
