const Echart_LChain_Month = require("../data/Echart_LChain_Month.json")
const Echart_PChain_Month = require("../data/Echart_PChain_Month.json")
const WeekendPChain = require("../data/Weekend_PChain_Year_process.json")
const WeekPChain = require("../data/Week_PChain_Year_process.json")
const participant_group = require("../data/participant_process.json")
const participant_info = require("../data/participant_info.json")
const classData = require("../data/write_json.json")



module.exports = [
    {
        url:"/visual/Echart_LChain_Month",
        type:"post",
        response:()=>{
            return {
                code:200,
                data:Echart_LChain_Month
            }
        }
    },
    {
        url:"/visual/Echart_PChain_Month",
        type:"post",
        response:()=>{
            return {
                code:200,
                data:Echart_PChain_Month
            }
        }
    },
    {
        url:"/visual/getClassData",
        type:"post",
        response:()=>{
            return {
                code:200,
                data:classData
            }
        }
    },
    {
        url:"/visual/getWeekendClassData",
        type:"post",
        response:()=>{
            return {
                code:200,
                data:WeekendPChain
            }
        }
    },
    {
        url:"/visual/getWeekClassData",
        type:"post",
        response:()=>{
            return {
                code:200,
                data:WeekPChain
            }
        }
    },
    {
        url:"/visual/getParticipantGroup",
        type:"post",
        response:()=>{
            return {
                code:200,
                data:participant_group
            }
        }
    },
    {
        url:"/visual/getParticipantInfo",
        type:"post",
        response:()=>{
            return {
                code:200,
                data:participant_info
            }
        }
    },

]