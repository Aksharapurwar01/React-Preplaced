import React, { useState } from "react";
import "./styles.css";

export default function File({ folder, handleInsertNode }) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(folder.id, e.target.value, showInput.isFolder);

      setShowInput({ ...showInput, visible: false });
    }
  };

  return (
    <div style={{ marginTop: "2px" }}>
      {folder.isFolder ? (
        <>
          <div className="folder" onClick={() => setExpand(!expand)}>
            📁 {folder.name}
            <button onClick={(e) => handleNewFolder(e, true)}>📂 +</button>
            <button onClick={(e) => handleNewFolder(e, false)}>📃 +</button>
          </div>

          <div
            className="subfolder"
            style={{ display: expand ? "block" : "none", marginLeft: "20px" }}
          >
            {showInput.visible && (
              <div className="inputContainer">
                <span>{showInput.isFolder ? "📂" : "📃"}</span>
                <input
                  onKeyDown={onAddFolder}
                  onBlur={() => setShowInput({ ...showInput, visible: false })}
                  type="text"
                  autoFocus
                />
              </div>
            )}
            {folder.items.map((exp, index) => {
              return <File key={index} folder={exp} />;
            })}
          </div>
        </>
      ) : (
        <div className="file"> 📃{folder.name}</div>
      )}
    </div>
  );
}
