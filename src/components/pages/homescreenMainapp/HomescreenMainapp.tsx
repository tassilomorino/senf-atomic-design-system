/** @format */

import React, { FC, useState } from "react";
import styled from "styled-components";
import TagSlide from "../../molecules/tagSlide/TagSlide";
import MainSwipeList from "../../organisms/mainSwipeList/MainSwipeList";
import OrganizationsOverview from "../../organisms/organizationsOverview/OrganizationsOverview";
import { HomescreenMainappProps } from "./HomescreenMainapp.types";

const Wrapper = styled.div<HomescreenMainappProps>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  overflow: hidden;
`;

const TagSlideWrapper = styled.div<HomescreenMainappProps>`
  position: fixed;
  width: 100vw;
  top: 50px;
  left: 0;
`;

const HomescreenMainapp: FC<HomescreenMainappProps> = ({ selectedTopics }) => {
  const [openOrganizationsOverview, setOpenOrganizationsOverview] =
    useState(false);
  return (
    <Wrapper>
      <TagSlideWrapper>
        <TagSlide type="topics" selectedTopics={selectedTopics} />
      </TagSlideWrapper>

      <MainSwipeList
        setOpenOrganizationsOverview={setOpenOrganizationsOverview}
        data={[
          {
            Stadtteil: "Mülheim",
            Thema: "Sport / Freizeit",
            body: "Vom Abschnitt Ecke Wallstr. bis Springbrunnen wird geplant ein Straßenfest zu veranstalten. Wohnst du in der Straße und willst deine Nachbar:innen ken",
            color: "#f6c095",
            commentCount: 0,
            createdAt: "2021-07-12T11:10:22.413Z",
            lat: 50.96734458192481,
            likeCount: 1,
            locationHeader: "Mülheimer Freiheit 142",
            long: 7.00181320821256,
            screamId: "omweqsDYlFMkmTFAX1Ba",
            status: "None",
            title: "Straßenfest an der Wallstraße",
          },
          {
            Stadtteil: "Mülheim",
            Thema: "Sport / Freizeit",
            body: "Vom Abschnitt Ecke Wallstr. bis Springbrunnen wird geplant ein Straßenfest zu veranstalten. Wohnst du in der Straße und willst deine Nachbar:innen ken",
            color: "#f6c095",
            commentCount: 0,
            createdAt: "2021-07-12T11:10:22.413Z",
            lat: 50.96734458192481,
            likeCount: 1,
            locationHeader: "Mülheimer Freiheit 142",
            long: 7.00181320821256,
            screamId: "omweqsDYlFMkmTFAX1Ba",
            status: "None",
            title: "Straßenfest an der Wallstraße",
          },
        ]}
        selectedTopics={["Versorgung"]}
      />

      {openOrganizationsOverview && (
        <OrganizationsOverview
          data={[
            {
              address: null,
              contact: "",
              createdAt: "2022-03-23T15:36:09.859Z",
              description: "asdlkasdasd askjhdhaskjdhaskkd",
              faqs: null,
              imgUrl:
                "https://firebasestorage.googleapis.com/v0/b/senf-dev.appspot.com/o/organizationsData%2FQO0SOuQBIc9wEjpayU9e%2Flogo%2Flogo?alt=media&token=131ee6fa-19a0-4ee9-b8c0-43909e2373d6",
              latitude: null,
              longitude: null,
              organizationId: "HNgqF5rjKfdjb7GxaPuK",
              organizationType: "Vereine",
              status: "active",
              title: "Tazy's organisation",
              userIds: ["EkLheyhRjYSCMyUd4qvMIng0as43"],
              weblink: "",
            },
            {
              address: null,
              contact: "",
              createdAt: "2022-03-23T15:36:09.859Z",
              description: "asdlkasdasd askjhdhaskjdhaskkd",
              faqs: null,
              imgUrl:
                "https://firebasestorage.googleapis.com/v0/b/senf-dev.appspot.com/o/organizationsData%2FQO0SOuQBIc9wEjpayU9e%2Flogo%2Flogo?alt=media&token=131ee6fa-19a0-4ee9-b8c0-43909e2373d6",
              latitude: null,
              longitude: null,
              organizationId: "HNgqF5rjKfdjb7GxaPuK",
              organizationType: "Vereine",
              status: "active",
              title: "Tazy's organisation",
              userIds: ["EkLheyhRjYSCMyUd4qvMIng0as43"],
              weblink: "",
            },
            {
              address: null,
              contact: "",
              createdAt: "2022-03-23T15:36:09.859Z",
              description: "asdlkasdasd askjhdhaskjdhaskkd",
              faqs: null,
              imgUrl:
                "https://firebasestorage.googleapis.com/v0/b/senf-dev.appspot.com/o/organizationsData%2FQO0SOuQBIc9wEjpayU9e%2Flogo%2Flogo?alt=media&token=131ee6fa-19a0-4ee9-b8c0-43909e2373d6",
              latitude: null,
              longitude: null,
              organizationId: "HNgqF5rjKfdjb7GxaPuK",
              organizationType: "Vereine",
              status: "active",
              title: "Tazy's organisation",
              userIds: ["EkLheyhRjYSCMyUd4qvMIng0as43"],
              weblink: "",
            },
          ]}
          onClick={() => {}}
          selectedOrganizationTypes={["Vereine"]}
        />
      )}
    </Wrapper>
  );
};

export default HomescreenMainapp;
