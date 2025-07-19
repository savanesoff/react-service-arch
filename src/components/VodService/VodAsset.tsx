import type { VodAsset } from "../../hooks/vod";

export const VodAssetView = (data: VodAsset) => {
  return (
    <div>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <img src={data.thumbnailUrl} alt={data.title} />
      <p>Duration: {data.duration} seconds</p>
      <p>Published At: {data.publishedAt}</p>
      {data.genre && <p>Genre: {data.genre.join(", ")}</p>}
    </div>
  );
};
