import React from "react";
import DesktopNavHeader from "../components/DesktopNavHeader.js";
import PrimaryInfoBlock from "../components/PrimaryInfoBlock.js";
import InfoBlock from "../components/InfoBlock.js";
import Carousel from "../components/Carousel.js";
import { useQuery } from "graphql-hooks";
import styles from "./StandardPage.module.scss";

const StandardPage = props => {
  var slugs = props.match.url.split("/").filter(slug => slug != "");
  console.log(slugs, props.tags);
  var tagMatches = props.tags.filter(tag => slugs.includes(tag.tagSlug));
  var tagIds = tagMatches.map(tag => tag.id);
  console.log(tagMatches, tagIds);

  const PAGE_QUERY = `query PAGE_QUERY($tagIds: [ItemId] = []) {
    allStandardPages(filter: {standardPageTags: {eq: $tagIds}}) {
      standardPageTitle
      content {
        ... on PrimaryInfoBlockRecord {
          id
          title
          body
          _modelApiKey
          infoBlockStat1
          infoBlockStat1Icon
          infoBlockStat1Subtitle
          infoBlockStat2
          infoBlockStat2Icon
          infoBlockStat2Subtitle
          infoBlockStat3
          infoBlockStat3Icon
          infoBlockStat3Subtitle
          ctaTitle
          ctaLink
        }
        ... on InfoBlockRecord {
          id
          body1
          body2
          body3
          body4
          subtitle1
          subtitle2
          subtitle3
          subtitle4
          summary
          title
          _modelApiKey
        }
        ... on CarouselRecord {
          id
          link {
            slug
          }
          ctaButtonLabel
          _modelApiKey
          media {
            format
            height
            url
            video {
              mp4Url
              streamingUrl
              thumbnailUrl
            }
            width
          }
          subtitle
          title
        }
      }
      slug
      id
      topLevelPage
    }
  }`;

  const { loading, error, data } = useQuery(PAGE_QUERY, {
    variables: {
      tagIds: tagIds
    }
  });
  if (loading) return "";
  if (error) return "Something Bad Happened";
  console.log(data, data.allStandardPages);
  var content =
    data && data.allStandardPages && data.allStandardPages.length > 0
      ? data.allStandardPages[0].content || []
      : [];
  console.log(content);

  return (
    <div>
      {content &&
        content.map(contentData => {
          console.log(contentData);
          if (contentData._modelApiKey == "primary_info_block")
            return <PrimaryInfoBlock data={contentData} />;
          else if (contentData._modelApiKey == "info_block")
            return (
              <div className={styles.container}>
                <InfoBlock data={contentData} />
              </div>
            );
          else if (contentData._modelApiKey == "carousel")
            return <Carousel data={contentData} />;
          else return <div />;
        })}
    </div>
  );
};

export default StandardPage;
