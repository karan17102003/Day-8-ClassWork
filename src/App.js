import logo from './logo.svg';
import './App.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

function App() {
  return (
    
    <div style={{
      display:'flex',
        justifyContent:'center',
    }}>
      
      <div style={{
        
        margin:'30px',
        backgroundColor:'white'
      }}>
      <Editor
    initialValue="hello "
    previewStyle="vertical"
    height="600px"
    initialEditType="markdown"
    useCommandShortcut={true}
    
    /></div>
    </div>
    
  );
}

export default App;
