import React, { Component } from "react";
import { connect } from "react-redux";
import FestivalData from "./FestivalData";
import { getFestivalData } from "./modules/FestivalDataActions";

const dataReceived = data => {
  return data
    ? data.reduce((acc, { name, bands }) => {
        bands.forEach(band => {
          var recordLabel =
            band["recordLabel"] && band["recordLabel"].length > 0
              ? band["recordLabel"]
              : undefined;

          var key = `${recordLabel}`;

          var bandName =
            band["name"] && band["name"].length > 0 ? band["name"] : undefined;

          if (!acc[key] && recordLabel && bandName)
            acc[key] = { bands: new Map(), recordLabel };

          if (recordLabel && bandName && name) {
            let festivals = [name];

            if (!acc[key].bands.has(bandName)) {
              acc[key].bands.set(bandName, festivals);
            } else {
              festivals = acc[key].bands.get(bandName);
              festivals.push(name);
              acc[key].bands.set(bandName, festivals);
            }
          }
        });
        return acc;
      }, {})
    : null;
};
const sortedData = data => {
  
  return data
    ? Object.entries(dataReceived(data))
        .sort()
        .reduce((o, [k, v]) => ((o[k] = v), o), {})
    : null;
};
class FestivalDataComponent extends Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    if (this.props.response) var data = sortedData(this.props.response);
    return (
      <div>
        {this.props.response ? ( 
          <FestivalData key="festivalData" data={data} />
        ) : (
          "No Data received from Api to Display"
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    response: state.festivalData.response
      ? state.festivalData.response.data
      : null
  };
};
const matchDispatchToProps = dispatch => ({
  fetchData: () => dispatch(getFestivalData())
});
export default connect(
  mapStateToProps,
  matchDispatchToProps
)(FestivalDataComponent);
