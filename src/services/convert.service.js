export const convert = async (files) => {
  const base64_files = [];
  const FR = new FileReader();
  return new Promise((resolve, reject) => {
    FR.addEventListener('load', (e) => {
      base64_files.push(e.target.result);
      if (files.length) {
        FR.readAsDataURL(files.shift());
      } else {
        resolve(base64_files);
      }
    });
    FR.addEventListener('error', (e) => {
      FR.abort();
      reject(new DOMException('error while encoding image', 'image-error'));
    });
    FR.readAsDataURL(files.shift());
  });
};
