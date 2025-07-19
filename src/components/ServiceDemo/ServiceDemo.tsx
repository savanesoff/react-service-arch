import React from "react";
import { EnvService } from "../EnvService";
import { StandbyService } from "../StandbyService";
import { AuthService } from "../AuthService";
import { VodService } from "../VodService";
import { AccountService } from "../AccountService";

export const ServiceDemo: React.FC = () => (
  <div className="font-mono px-16 mx-auto my-8 max-w-2/3">
    <h2 className="text-2xl font-bold mb-6 text-center">
      React Service Architecture Demo
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <EnvService />
      <AuthService />
      <AccountService />
      <StandbyService />
    </div>

    <VodService />
  </div>
);
