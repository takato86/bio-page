import React from "react";


export default class Achievements extends React.Component{
    render(){
        return(
            <div className="card p-5 m-3">
                <h1>研究</h1>
                <ol>
                    <li className="p-1">奥戸 嵩登, 山田誠二 (2019). 階層型強化学習における人間のサブゴール知識転移. 2019年度人工知能学会全国大会（第33回）. https://doi.org/10.11517/pjsai.JSAI2019.0_1Q2J202</li>
                    <li className="p-1">Okudo, T., Yamaguchi, T., {"&"} Takadama, K. (2018). Designing the Learning Goal Space for Human Toward Acquiring a Creative Learning Skill. In Habib, M. (Ed.), Handbook of Research on Biomimetics and Biomedical Robotics {"("}pp. 460-475{")"} IGI Global. http://doi:10.4018/978-1-5225-2993-4.ch020</li>
                    <li className="p-1">Okudo, T., Yamaguchi, T., Murata A., Tatsumi T., Uwano F., {"&"} Takadama K. (2017). Supporting the Exploration of the Learning Goals for a Continuous Learner Toward Creative Learning. Journal of Advanced Computational Intelligence and Intelligent Informatics, 21(5), 907-916. 10.20965/jaciii.2017.p0907</li>
                </ol>
            </div>
        );
    }
}
