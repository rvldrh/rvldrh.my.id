"use client";

import { useState } from "react";

type GalleryTab = "project" | "sertif";

const useGalleryTab = (defaultTab: GalleryTab = "project") => {
  const [activeTab, setActiveTab] = useState<GalleryTab>(defaultTab);

  const isProject = activeTab === "project";
  const isSertif = activeTab === "sertif";

  const switchToProject = () => setActiveTab("project");
  const switchToSertif = () => setActiveTab("sertif");

  return {
    activeTab,
    isProject,
    isSertif,
    switchToProject,
    switchToSertif,
    setActiveTab,
  };
};

export default useGalleryTab;
