import { GridLoader } from "react-spinners";

const ErrorMessage = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <GridLoader color="red" />
      <div className="text-2xl font-bold">흐음</div>
      <div className="text-sm">잠시 후 다시 시도해주세여</div>
    </div>
  );
};

export default ErrorMessage;
