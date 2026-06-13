export const generateGTMAudit = async (targetUrl) => {
  try {
    const response = await fetch("https://generategtmaudit-4n3sjzehra-uc.a.run.app", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ targetUrl })
    });

    if (!response.ok) {
      const errText = await response.text();
      let errMsg = "Unknown Backend Error";
      try {
        const parsed = JSON.parse(errText);
        errMsg = parsed.error || errText;
      } catch (e) {
        errMsg = errText;
      }
      throw new Error(errMsg);
    }

    const data = await response.json();
    
    if (!data.audit) {
      throw new Error("Backend returned malformed data.");
    }

    return data.audit;

  } catch (err) {
    console.error("Backend Error:", err);
    throw err;
  }
};
