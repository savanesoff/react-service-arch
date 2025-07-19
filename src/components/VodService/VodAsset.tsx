import type { VodAsset } from "../../hooks/vod";

export const VodAssetView = (data: VodAsset) => {
  return (
    <div className="rounded border p-4 bg-cyan-50 flex flex-col gap-2">
      <div className="font-bold  bg-amber-200">{data.title}</div>
      <div className="w-full overflow-ellipsis overflow-hidden text-nowrap">
        {data.description}
      </div>
      <img src={data.thumbnailUrl} alt={data.title} className="size-32" />
      {/* <p>Duration: {data.duration} seconds</p>
      <p>Published At: {data.publishedAt}</p> */}
      <div
        className="flex flex-row
        items-center gap-2 text-sm text-gray-600"
      >
        {data.genre && <p>Genre: {data.genre.join(", ")}</p>}
      </div>
    </div>
  );
};
