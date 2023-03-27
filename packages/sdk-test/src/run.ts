import {Library} from "@obolNetwork/obol-sdk" ;

const client: Library = new Library({
});

// client.getPosts().then((p) => {
//   console.log(p);
// });

client.clusters.getCluster("0xc29c47af8325f0415b339ef7e5d4b672311d22a7b3974343153d78a387f4d1a8")
  .then((p) => {
    console.log(`Created new cluster with creator address ${p.creator.address}`);
  });
