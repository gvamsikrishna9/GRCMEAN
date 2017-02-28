This is a sample MEAN application

Following are the urls to get the respective data.

​1) localhost:9090/api/grc/all  --> to get all stored segments

2) localhost:9090/api/grc?srcBuildId=b001 --> to display all segments particular to one build mentioned in the url

3) localhost:9090/api/grc/translation?srcBuildId=b002&transLang=koSegment&key=k002  --> to display translation segment of particular english segment and build mentioned in the url

4) localhost:9090/api/grc/compare/builds?key=k001&targetBuildId=b003  --> to display english segment of required/target build if it is changed or not.