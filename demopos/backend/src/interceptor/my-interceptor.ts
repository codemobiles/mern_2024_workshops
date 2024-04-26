const interceptor1 = (req, res, next) => {
  console.log("Pass1");
  // http://localhost:8081/api/v2/product?token=1234
  if (req.query.token == "1234") {
    next();
  } else {
    res.end("No authorization1");
  }
};

const interceptor2 = (req, res, next) => {
  console.log("Pass2");
  if (req.query.passsport == "555") {
    next();
  } else {
    res.end("No authorization2");
  }
};

export default {
  interceptor1,
  interceptor2,
};
