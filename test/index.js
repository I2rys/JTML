//Dependencies
const JTML = require("../index.js")

//Variables
const Code = `
<name>
    <self>
        ss
    </self>
    <test>
        yestestaw
        r
        wanrarlnwaronwarnalawr
        nawrna
    </test>
    <test2>
        awgwag
        an
        ha
        ha
        hahha
    </test2>
    <test3>
        awgwag
        an
        ha
        ha
        hahhag
    </test3>
</name>
<description>
    <self>
        right?Yeah
    </self>
    <description2>
        fawfaw
    </description2>
</description>
<hahaha>
    <selfhahaha>
        right?Yfafeah
    </selfhahaha>
</hahaha>`

//Main
console.log(JTML.parse(Code))
