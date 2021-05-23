const express = require('express')
const app = express()

const mySql = require('mysql')
const cors = require('cors')


app.use(cors())
app.use(express.json());

const db = mySql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'developer_hunt'
})

app.get("/jobs", (req, res) => {
    db.query("SELECT * FROM job_post", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.post("/jobs", (req, res) => {

    const Job_name = req.body.Job_name;
    const Company = req.body.Company;
    const Type = req.body.Type;
    const Skill = req.body.Skill;
    const Job_description = req.body.Job_description;
    const Salary = req.body.Salary
    const Date_posted = req.body.Date_posted

    const UID = req.body.UID

    db.query(`SELECT IdNo FROM members WHERE UID = '${UID}'`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            const IdNo = result[0].IdNo
            console.log(IdNo);
            db.query(
                "INSERT INTO job_post (Job_name, Company, Type, Skill,Job_description, Salary, Date_posted, IdNo) VALUES (?,?,?,?,?,?,?,?)",
                [Job_name, Company, Type, Skill, Job_description, Salary, Date_posted, IdNo],
                (err, result) => {
                    if (err) {
                        console.log(err);
                    } else {
                        res.send("Job Successfully Created");
                    }
                }
            );
        }
    });


    // db.query(
    //     "INSERT INTO job_post (Job_name, Company, Type, Skill,Job_description, Salary, Date_posted, IdNo) VALUES (?,?,?,?,?,?,?,?)",
    //     [Job_name, Company, Type, Skill, Job_description, Salary, Date_posted, IdNo],
    //     (err, result) => {
    //         if (err) {
    //             console.log(err);
    //         } else {
    //             res.send("Job Successfully Created");
    //         }
    //     }
    // );
});

app.get("/job/id", (req, res) => {
    // console.log(req.params);
    // console.log(req.query);
    const Job_Id = req.query.Job_Id
    // console.log(P_Id);
    db.query(`SELECT * FROM job_post WHERE Job_Id = ${Job_Id}`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});



app.get("/idea", (req, res) => {
    db.query("SELECT * FROM idea", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.post("/idea", (req, res) => {

    const Idea_description = req.body.Idea_description;
    const Budget = req.body.Budget;
    const Category = req.body.Category;
    const Duration = req.body.Duration;
    const Date_posted = req.body.Date_posted
    const Idea_name = req.body.Idea_name

    const UID = req.body.UID

    db.query(`SELECT IdNo FROM members WHERE UID = '${UID}'`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            const IdNo = result[0].IdNo
            console.log(IdNo);
            db.query(
                "INSERT INTO idea (Idea_description, Budget, Category,  Duration,  Date_posted, IdNo, Idea_name) VALUES (?,?,?,?,?,?,?)",
                [Idea_description, Budget, Category, Duration, Date_posted, IdNo, Idea_name],
                (err, result) => {
                    if (err) {
                        console.log(err);
                    } else {
                        res.send("Idea Successfully Created");
                    }
                }
            );
        }
    });

});

app.get("/idea/id", (req, res) => {
    // console.log(req.params);
    // console.log(req.query);
    const Idea_Id = req.query.Idea_Id
    // console.log(P_Id);
    db.query(`SELECT * FROM idea WHERE Idea_Id = ${Idea_Id}`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});





app.get("/problem", (req, res) => {
    db.query("SELECT * FROM problem", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get("/problem/id", (req, res) => {
    // console.log(req.params);
    // console.log(req.query);
    const P_Id = req.query.P_Id
    // console.log(P_Id);
    db.query(`SELECT * FROM problem WHERE P_ID = ${P_Id}`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});


app.post("/problem", (req, res) => {
    const P_Title = req.body.P_Title;
    const P_description = req.body.P_description;
    const Category = req.body.Category
    const Date_posted = req.body.Date_posted

    const UID = req.body.UID

    // get the IdNo from members table 


    db.query(`SELECT IdNo FROM members WHERE UID = '${UID}'`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            const IdNo = result[0].IdNo
            console.log(IdNo);
            db.query(
                "INSERT INTO PROBLEM(P_Title, Category, P_description,  Date_posted,  IdNo) VALUES (?,?,?,?,?)",
                [P_Title, Category, P_description, Date_posted, IdNo],
                (err, result) => {
                    if (err) {
                        console.log(err);
                    } else {
                        res.send("Problem Post Successfully Created");
                    }
                }
            );
        }
    });
    // console.log(IdNo);

    // db.query(
    //     "INSERT INTO PROBLEM(P_Title, Category, P_description,  Date_posted,  IdNo) VALUES (?,?,?,?,?)",
    //     [P_Title, Category, P_description, Date_posted, IdNo],
    //     (err, result) => {
    //         if (err) {
    //             console.log(err);
    //         } else {
    //             res.send("Problem Post Successfully Created");
    //         }
    //     }
    // );
});

app.get("/internship", (req, res) => {
    db.query("SELECT * FROM internship", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get("/internship/id", (req, res) => {
    // console.log(req.params);
    // console.log(req.query);
    const internship_Id = req.query.internship_Id
    // console.log(P_Id);
    db.query(`SELECT * FROM internship WHERE internship_Id = ${internship_Id}`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(res);
            res.send(result);
        }
    });
});

app.post("/internship", (req, res) => {
    const Company_name = req.body.Company_name;
    const Department = req.body.Department;
    const Type = req.body.Type
    const Date_posted = req.body.Date_posted


    const UID = req.body.UID

    // get the IdNo from members table 


    db.query(`SELECT IdNo FROM members WHERE UID = '${UID}'`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            const IdNo = result[0].IdNo
            console.log(IdNo);
            db.query(
                "INSERT INTO internship(Company_name, Department, Type, Date_posted, IdNo) VALUES (?,?,?,?,?)",
                [Company_name, Department, Type, Date_posted, IdNo],
                (err, result) => {
                    if (err) {
                        console.log(err);
                    } else {
                        res.send("Internship Post Successfully Created");
                    }
                }
            );
        }
    });

});



app.get("/member/id", (req, res) => {
    // console.log(req.params);
    // console.log(req.query);
    const IdNo = req.query.IdNo
    // console.log(P_Id);
    db.query(`SELECT * FROM members WHERE IdNo = ${IdNo}`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});


app.get('/', (req, res) => res.json({ message: "Server is running on PORT 3001" }));

app.post("/members/add", (req, res) => {
    const UID = req.body.UID
    const name = req.body.name
    const email = req.body.email

    db.query(
        "INSERT INTO members (UID,DisplayName,Email) VALUES (?,?,?)",
        [UID, name, email],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Successfully created a member.");
            }
        }
    );
});

app.listen(3001, () => {
    console.log('Node Server Started in PORT 3001');
})



