import React from "react";
import { EnvService } from "../EnvService";
import { StandbyService } from "../StandbyService";
import { AuthService } from "../AuthService";
import { VodService } from "../VodService";
import { EasService } from "../EasService";

export const ServiceDemo: React.FC = () => (
  <div className="font-mono max-w-xl mx-auto my-8">
    <h2 className="text-2xl font-bold mb-6 text-center">
      React Service Architecture Demo
    </h2>
    <EnvService />
    <StandbyService />
    <AuthService />
    <VodService />
    <EasService />
  </div>
);
