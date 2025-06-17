// let var1='mamyake'
// var1=0

type VisitsData = {
  visits: Array<{
    page: {
      symbol: string;
    };
  }>;
  user: {
    name: string;
  };
};
function logisits(data: VisitsData) {
  data.visits.forEach(visit => console.log(visit.page.symbol, data.user.name));
}
logisits({
    visits:[{page:{symbol:"Page1"}},{page:{symbol:"Page2"}}],
    user:{name:"Bob"},
})
const firstName='Non';
const surName='yes';
const fullName=`${firstName} ${surName}`