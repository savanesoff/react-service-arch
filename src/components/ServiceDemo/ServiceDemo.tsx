import React from "react";
import { EnvService } from "../EnvService";
import { StandbyService } from "../StandbyService";
import { AuthService } from "../AuthService";
import { VodService } from "../VodService";
import { AccountService } from "../AccountService";

export const ServiceDemo: React.FC = () => (
  <div className="font-mono px-16 mx-auto my-8">
    <h2 className="text-2xl font-bold mb-6 text-center">
      React Service Architecture Demo
    </h2>
    <div className=" flex flex-row gap-4">
      <EnvService />
      <AuthService />
      <AccountService />
      <StandbyService />
    </div>

    <VodService />
  </div>
);
