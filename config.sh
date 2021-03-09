#!/bin/bash
set -e

docker-compose exec mongo /usr/bin/mongo --eval '''if (rs.status()["ok"] == 0) {
    rsconf = {
      _id : "rs0",
      members: [
        { _id : 0, host : "mongo:27017", priority: 1.0 }
      ]
    };
    rs.initiate(rsconf);
}
rs.conf();
rs.secondaryOk()'''

curl -X POST -H "Content-Type: application/json" -d @sink-connector.json http://localhost:8083/connectors | jq
