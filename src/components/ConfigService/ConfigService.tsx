import React from "react";
import { ServiceCard } from "../ServiceCard";
import { Button } from "../Button";
import { useAppConfig } from "../../hooks/AppConfig";

export const ConfigService: React.FC = () => {
  const { fetchTimeout, shouldError, setShouldError, setFetchTimeout } =
    useAppConfig();

  return (
    <ServiceCard title={`Config Service`}>
      <Button
        title="Should error"
        variant="primary"
        onClick={() => {
          setShouldError((prev: boolean) => !prev);
        }}
      >
        {shouldError ? "Disable Error" : "Enable Error"}
      </Button>
      <div className="mt-4">
        <label htmlFor="timeout-slider" className="block mb-2">
          Network Latency: {fetchTimeout} ms
        </label>
        <input
          id="timeout-slider"
          type="range"
          min={0}
          max={5000}
          value={fetchTimeout}
          onChange={(e) => setFetchTimeout(Number(e.target.value))}
          className="w-full"
        />
      </div>
    </ServiceCard>
  );
};
