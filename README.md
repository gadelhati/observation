# Application _Front_


![github](https://img.shields.io/github/stars/gadelhati/application-front?style=social "Github")
![java](https://img.shields.io/badge/java-8-6495ED "Java")
![springboot](https://img.shields.io/badge/springboot-2.4.5-6495ED "Spring Boot")
![react](https://img.shields.io/badge/react-17.0.2-6495ED "React")

## `How this project was created`

```
npm create-react-app application-front
```
## `Necessary Tech stack`

```
npm i axios react-redux react-router-dom redux-thunk react-bootstrap react-dropzone react-validation validator
```
## `How to run`

```
npm start
```

## `How to build`

```
npm run build
```
## Reference API download link

> [https://github.com/gadelhati/application-back](https://github.com/gadelhati/application-back)

## Reference API, running locally

> [http://localhost:3128/](http://localhost:3128)

## Developer

> [Gadelha TI](https://github.com/gadelhati)

## License

> [MIT License](https://choosealicense.com/licenses/mit/)

```
git config --global http.proxy http://username:password@proxy-armacao.mb:6060

git config --global user.name "GadelhaTI"
git config --global user.email "gadelha.ti@gmail.com"

git remote add origin <>
git add archive.txt
git add .
git commit –m "comment commit"
git pull
git tag 1.1.0 <insert-commitID-here>
git push -u origin master
git diff
```

## Deploy
```
npm run build
cp /home/<user>/build.zip /usr/share/nginx/html
unzip /usr/share/nginx/html/build.zip
```

### Edit /etc/nginx/conf.d/default.conf

Add the new code
```
location /<folder> {
    root    /usr/share/nginx/html;
    index   index.html  index.htm;
}
```