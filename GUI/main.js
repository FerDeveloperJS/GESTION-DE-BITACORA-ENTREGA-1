import { app, BrowserWindow } from 'electron';
import path from 'path';


const __dirname = path.dirname(new URL(import.meta.url).pathname);


let localDirname = __dirname.replace(/^file:\/\//, '');  

if (localDirname.startsWith('/')) {
  localDirname = localDirname.slice(1);  
}


const normalizedDirname = path.normalize(localDirname);

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });


  const htmlPath = path.join(normalizedDirname, '/loginWindow/gestor-sesion.html');
  console.log('HTML Path:', htmlPath);  

  win.loadFile(htmlPath);
}


app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
