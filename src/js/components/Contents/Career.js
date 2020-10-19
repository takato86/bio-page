import React from "react";


export default class  extends React.Component{
    render(){
        return(
            <div className="card p-5 m-3">
            <h1 className="pb-3">経歴</h1>
            <ul className="list-group">
                <li className="list-group-item">Datumix株式会社 取締役CTO <span className="badge badge-primary">2019/9~</span></li>
                <li className="list-group-item">政策研究大学院大学 リサーチアシスタント<span className="badge badge-primary">2019/4~</span></li>
                <li className="list-group-item">Datumix株式会社 執行役員CTO <span className="badge badge-secondary">2019/1~2019/8</span></li>
                <li className="list-group-item">総合研究大学院大学 複合科学研究科 情報学専攻 <span className="badge badge-primary">2018/4~</span></li>
                <li className="list-group-item">奈良工業高等専門学校 専攻科 電子情報工学専攻 <span className="badge badge-secondary">2016/4~2018/3</span></li>
                <li className="list-group-item">奈良工業高等専門学校 情報工学専攻 <span className="badge badge-secondary">2011/4~2016/3</span></li>
            </ul>
            </div>
        );
    }
}