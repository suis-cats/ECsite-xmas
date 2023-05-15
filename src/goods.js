import React, {useState} from 'react';
import { Link, useParams } from 'react-router-dom';

const mockdata = [
    { id: 0, name: "テリア", sum: "甘えん坊で、お留守番は苦手。", desc: "", img: "0.jpg", stock: 3, comment: [] },
    { id: 1, name: "ゴールデンレトリバー", sum: "社交的な性格で、人間好き。", desc: "ゴールデン・レトリーバーは、イギリス原産の大型犬である。賢さ及び忠誠心を兼ね備え、穏和な性格の犬種であるためペットとして広く愛好されている。", img: "1.jpg", stock: 3, comment: [] },
    { id: 2, name: "ふーこ", sum: "たまに岩本研究室に連れてこられる", desc: "足が細い", img: "5.jpg", stock: 1, comment: [] },
    { id: 3, name: "右フック犬", sum: "つよそう", desc: "説明文3", img: "2.jpg", stock: 0, comment: [] },
    { id: 4, name: "Doge", sum: "なんか見たことある犬", desc: "説明文3", img: "2.jpg", stock: 1, comment: [] },
    { id: 5, name: "イヌ", sum: "詳しいことは知らないほうが幸せだ。", desc: "説明文3", img: "10.jpg", stock: 999, comment: [] },
]

export function GoodsList(props) {
   
    const list = mockdata.map(
        (c) => {
            return (
                <div>
                    <Link to={'/detail/' + c.id}>
                        <p>{c.name}</p>
                    </Link>
                </div>
            )
        }
    );

    return (
        <div>
            <div>{list}</div>
        </div>
    )
}


export function Detail(props) {
    // URL parameter の受け取り
    const params = useParams();  
    const id = params.id;

    const [item, setItem] = useState(mockdata[id]);
    const [comtext, setCom] = useState('');

    function handleChange(event){
        setCom(event.target.value); //コメント１文字つど保存
    }

    function handleSubmit(event) {
        let copy = Object.assign({}, item);   //     
        copy.comment.push(comtext);
        setItem(copy);
        event.preventDefault();
    }

    const comments = item.comment.map((c)=>{
        return(<p>{c}</p>)
    })

    return (
        <div>
            <h1>詳細ページです</h1>
            <p>犬のid: {item.id}</p>
            <p>犬の名前: {item.name}</p>
            <p>犬の説明: {item.sum}</p>
            <p>犬の詳細な説明: {item.desc}</p>
            <p>犬の画像</p>
            <img src={item.img} />
            <p>{comments}</p>

            <form onSubmit={handleSubmit}>
                <label>コメント
                    <input type="text" value={comtext} onChange={handleChange} />
                </label>
                <input type="submit" value="投稿" />
            </form>
            <Link to="/">もどる</Link>
        </div>
    );
    
}