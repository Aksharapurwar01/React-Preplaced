import React, { useState } from 'react';
import explorer from './data';
import File from './file';
import useTraverseTree from '../../hooks/useTraverseTree';

export default function FileExplorer() {
    const [folder, setExplorer] = useState(explorer);
    const {insertNode} = useTraverseTree();

    const handleInsertNode = (folderId, item, isFolder) => {
        const finalTree = insertNode(folder, folderId, item, isFolder);
        setExplorer(finalTree);
      };
  return (
    <div>
      <h1>File Explorer</h1>
      <File handleInsertNode={handleInsertNode} folder={folder}/>
    </div>
  )
}
