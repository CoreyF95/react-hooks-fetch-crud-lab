import QuestionItem from "./QuestionItem";


function QuestionList({ mydata, delQuestion, updatedQuestion }) {

  const dispData = mydata.map((val) => {
    return <QuestionItem question={val} delQuestion={delQuestion} updatedQuestion={updatedQuestion} />
  })
  return (
    <>
      <h1>Quiz Questions</h1>
        {dispData}
    </>
  );
}

export default QuestionList;