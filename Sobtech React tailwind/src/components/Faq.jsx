export default function App() {
  return (
    <div className="flex justify-evenly py-15 px-20">
      <div className="flex flex-col justify-center gap-6">
        <h2 className="text-amber-600 font-bold text-[20px]">FAQ</h2>
        <span>
          <h1 className="font-bold text-[40px] flex-wrap ">
            Navigate the Digital World
          </h1>
          <p className="font-bold text-[40px] flex-wrap"> with Confidence</p>
        </span>
        <p className="font-light">
          Aliquam eros justo, posuere loborti laorematullamcorper the posuer
          viverra.
        </p>
        <div className="bg-[#FFFAF0] flex w-[300px] rounded-2xl">
          <h1 className="font-extrabold text-5xl px-8 py-8">10+</h1>
          <p className="flex flex-col opacity-60 py-8">
            <p className="px-3">years of</p>
            <span className="px-3"> experience</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-20">
        <details>
          <summary className="bg-[#FFFAF0] px-5 py-5 border-b-black border-2 rounded-2xl list-none cursor-pointer">
            What is physical therapy?
          </summary>
          <p className="flex flex-col flex-wrap bg-[#FBFBFB] px-5 py-5">
            It is a long established fact that a reader will be distracted by
            <span>
              the readable content of a page when looking at its layout. The
              point
            </span>
            <span>
              of using Lorem Ipsum is that it has a more-or-less normal
            </span>
            <span>
              distribution of letters, as opposed to making up random text.
            </span>
          </p>
        </details>
        <details>
          <summary className="bg-[#FFFAF0] px-5 py-5 border-b-black border-2 rounded-2xl list-none cursor-pointer">
            What is conditions can physical therapy treat?
          </summary>
          <p className="flex flex-col flex-wrap bg-[#FBFBFB] px-5 py-5">
            It is a long established fact that a reader will be distracted by
            <span>
              the readable content of a page when looking at its layout. The
              point
            </span>
            <span>
              of using Lorem Ipsum is that it has a more-or-less normal
            </span>
            <span>
              distribution of letters, as opposed to making up random text.
            </span>
          </p>
        </details>
        <details>
          <summary className="bg-[#FFFAF0] px-5 py-5 border-b-black border-2 rounded-2xl list-none cursor-pointer">
            Is physical therapy painful?
          </summary>
          <p className="flex flex-col flex-wrap bg-[#FBFBFB] px-5 py-5">
            It is a long established fact that a reader will be distracted by
            <span>
              the readable content of a page when looking at its layout. The
              point
            </span>
            <span>
              of using Lorem Ipsum is that it has a more-or-less normal
            </span>
            <span>
              distribution of letters, as opposed to making up random text.
            </span>
          </p>
        </details>
      </div>
    </div>
  );
}
