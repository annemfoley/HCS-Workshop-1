import React from "react";
import Project from "../../components/Project/Project";

export default function ProjectsScreen() {
  return (
    <div className="screen-background">
      <Project
        title="Reinforcement Learning in Astrophysics"
        description="I researched how reinforcement learning could be applied in time optimization for telescopes and observatories."
        link="https://quarknet.fnal.gov/fnal-uc/quarknet-summer-research/QNET2018/Nicholas-Anne.shtml"
      />
    </div>
  );
}