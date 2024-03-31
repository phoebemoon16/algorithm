/**
 * 题目描述:
小明来到学校当老师，需要将学生  ，你能帮帮他吗?
输入描述:
第1行输入两个整数，学生人数n和科目数量m:
1.0 < n < 100
2.0 < m < 10

第2行输入m个科目名称，彼此之间用空格隔开:
1.科目名称只由英文字母构成，单个长度不超过10个字符
2.科目的出现顺序和后续输入的学生成绩-一对应。
3.不会出现重复的科目名称。

第3行开始的n行，每行包含一个学生的姓名和该生m个科目的成绩(空格隔开):
1.学生不会重名。
2.学生姓名只由英文字母构成，长度不超过10个字符,
3.成绩是0~100的整数，依次对应第2行种输入的科目。

第n+2行，输入用作排名的科目名称。若科目不存在，则按总分进行排序。

输出描述:
1.输出一行，按成绩排序后的学生名字，空格隔开。
2.成绩相同的按照学生姓名字典顺序排序。

解题思路： 动态排序，但是指定科目进行排序 或者总分
 */


function solution(m,n,subject,student,sortType){
    if (m >= 10 || n >= 100) {
        return
    }
    let typeIndex = subject.findIndex(item => item === sortType)
    console.log(typeIndex, 'typeindex')
    student = student.sort()  // 默认排序是将元素转换为字符串，然后按照它们的 UTF-16 码元值升序排序。 先对学生的姓名进行排序 应对的是成绩相同的按照学生姓名字典顺序排序。
    student = student.sort((a,b) => {
        if (typeIndex >= 0) {
            return b[typeIndex + 1] - a[typeIndex + 1]
        } else {
            let aTest = JSON.parse(JSON.stringify(a))
            let bTest = JSON.parse(JSON.stringify(b))
            aTest.shift()
            bTest.shift()
            return bTest.reduce((acc, cur) => acc+cur) - aTest.reduce((acc, cur) => acc + cur)
        }
    })
    return student
}

console.log(solution(3,2,['yuwen', 'shuxue'],[['minmin', 90, 95],['fbfb',90,95],['fangfang',95, 90],['xiaohua', 88, 95]], 'shuxue0'))
console.log(solution(3,2,['yuwen', 'shuxue'],[['minmin', 90, 95],['fbfb',90,95],['fangfang',95, 90],['xiaohua', 88, 95]], 'shuxue'))