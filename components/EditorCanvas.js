import { useState } from 'react';

export default function EditorCanvas() {
  const [blocks, setBlocks] = useState([]);

  function addText() {
    setBlocks([...blocks, { type: 'text', content: 'New headline' }]);
  }
  function addProduct() {
    setBlocks([...blocks, { type: 'product', title: 'Product', price: '0.00' }]);
  }

  return (
    <div className="canvas">
      <div className="toolbar">
        <button onClick={addText}>Add Text</button>
        <button onClick={addProduct}>Add Product</button>
      </div>
      <div className="blocks">
        {blocks.map((b,i) => (
          <div key={i} className={`block ${b.type}`}>
            {b.type === 'text' && <div contentEditable suppressContentEditableWarning>{b.content}</div>}
            {b.type === 'product' && (
              <div className="product-card">
                <div className="prod-img"></div>
                <input defaultValue={b.title} />
                <input defaultValue={b.price} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}