
DEFAUT_BASE_DIR="/opt/";
DEFATU_PROJECT="personalWebsite";
 
path=$DEFAUT_BASE_DIR$DEFATU_PROJECT;

target_dir=$path

echo $target_dir


cd $target_dir
echo -------------------start-fetch

git pull

echo --------------------end-fetch
