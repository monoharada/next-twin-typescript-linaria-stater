x=`identify  -format '{file:'"'%f'"',width:%w,height:%h},' public/images/*`
imp=`identify  -format 'import %t from '"'@/images/%f'"';' public/images/*`
name=`identify -format '%t,' public/images/*`
cat << EOF > ./src/lib/imageList.js
module.exports = [
${x}
]

EOF
cat << EOF > ./src/lib/imageIndex.js

${imp}

export {
${name}
 }
EOF
