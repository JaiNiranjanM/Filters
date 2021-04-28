/* ++++++++++ --------------- EXPORTS --------------- ++++++++++ */
export const SET_SITE_DATA = "SET_SITE_DATA"; // please update and add more if necessary
export const GET_ORGINAL_SITE_DATA = "GET_ORGINAL_SITE_DATA";
export const setSiteData = (siteData) => ({
  type: SET_SITE_DATA,
  payload: siteData,
});
export const getOrginalSiteData = () => ({
  type: GET_ORGINAL_SITE_DATA,
});
