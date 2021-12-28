console.log('我是main.js')
let n = 1
prePage.onclick = ()=> {
    const request = new XMLHttpRequest()
    request.open('GET', `page${n-1}`)
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status >=200 && request.status < 300){
            const array = JSON.parse(request.response)
            const result = array.map(item=>`<li>${item.id}</li>`).join('')
            list.innerHTML = `<ul>${result}</ul>`
        }
    }
    n -= 1
    if(n<1){
        alert('没有更多了')
        n += 1
        return
    }
    request.send()
}
nextPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', `page${n+1}`)
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status >= 200 && request.status < 300){
            const array = JSON.parse(request.response)
            const result = array.map(item=>`<li>${item.id}</li>`).join('')
            list.innerHTML = `<ul>${result}</ul>`
        }
    }
    n += 1
    if(n>3){
        alert('没有更多了')
        n -= 1
        return
    }
    request.send()
}
getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', 'test-4.json')
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status >=200 && request.status < 300){
            myName.textContent= JSON.parse(request.response).name
        }
    }
    request.send()
}
getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', 'test-3.xml')
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status >=200 && request.status < 300){
            const msg = request.responseXML.getElementsByTagName('warning')[0].innerHTML.trim()
            console.log(msg)
        }
    }
    request.send()
}
getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', 'test-2.html')
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status >=200 && request.status < 300) {
            const div = document.createElement('div')
            div.innerHTML = request.response
            document.body.appendChild(div)
        }
    }
    request.send()
}

getCSS.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET', 'style.css')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && (request.status >=200 && request.status < 300)){
            const style = document.createElement('style')
            style.innerHTML = request.response
            document.head.appendChild(style)
        }
    }
    request.send()
}
getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', 'test-1.js')
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status >=200 && request.status < 300){
            const script = document.createElement('script')
            script.innerHTML = request.response
            document.body.appendChild(script)
        }
    }
    request.send()
}