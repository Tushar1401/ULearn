import {PieChart} from "react-minimal-pie-chart";
import './Skill.css'

function Skill(){
    return (
        <div>
            <h1>Here Our Some Cool Stats About Me</h1>
            <hr/>
            <div id="skills">
                Top Skills
                <PieChart className="skills-chart"
                          data={[
                              { title: 'React', value: 10, color: '#E38627' },
                              { title: 'Algorithms', value: 15, color: '#C13C37' },
                              { title: 'System Design', value: 20, color: '#6A2135' },
                          ]}
                />
                <div className="table">
                    <div> <p  style={{
                            fontSize: "3vh"
                    }}><span>Lorem ipsum dolor sit amet, lorem onsectetur adipisicin voluptatum.</span><span>Aperllitia natus necessitatibus nobis nulla quasi repudiandae tenetur totam vero vitae voluptatem voluptatum.</span><span>Aut, autem culpa dignissimos doloribus eius esse  sunt? Alias animi assumenda culpa dignissimos quam quisquam, quos!</span></p>
                    </div>
                    <div className="5">

                        <table style={{
                            textAlign: "justify"
                        }}>
                            <tr>
                                <th>Field</th>
                                <th>Information</th>
                            </tr>
                            <tr>
                                <td>Communication Skills</td>
                                <td>Confident</td>
                            </tr>
                            <tr>
                                <td>Industry Required Skills</td>
                                <td>2 Yrs Experience</td>
                            </tr>
                            <tr>
                                <td>Known Languages </td>
                                <td>Two</td>
                            </tr>
                            <tr>
                                <td>Online Resume</td>
                                <td>Click Here</td>
                            </tr>

                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill