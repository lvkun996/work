/**
    解析后端bolb流文件，导出为excel表
    @param { blon  } res blob流文件
    @param { String} fileName 导出的excel表名
*/

export function exportHandle (res, fileName) {
  const blob = new Blob([res])
  console.log(blob)

  const elink = document.createElement('a')// 创建a标签
  elink.download = fileName + '.xls'// 为a标签添加download属性
  // a.download = fileName; //命名下载名称
  elink.style.display = 'none'
  elink.href = URL.createObjectURL(blob)
  document.body.appendChild(elink)
  elink.click()// 点击下载
  URL.revokeObjectURL(elink.href) // 释放URL 对象
  document.body.removeChild(elink)// 释放标签
}
