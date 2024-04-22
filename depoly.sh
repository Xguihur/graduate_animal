# !/bin/bash

echo "build 生成生产环境代码"

rm -rf build && npm run build

echo "上传代码到云主机"

cd build && scp -i ~/.ssh/id_rsa.pem -r * root@8.134.111.95:/www/wwwroot/www.animal.com
# cd build && scp -r * root@8.134.111.95:/www/wwwroot/www.animal.com
echo "上传成功--访问网址: http://8.134.111.95:7777"
# echo "跑起程序"
# npm run dev
