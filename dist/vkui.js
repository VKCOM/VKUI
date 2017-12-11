(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = this["webpackHotUpdate"];
/******/ 	this["webpackHotUpdate"] = 
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) { // eslint-disable-line no-unused-vars
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if(parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/ 	
/******/ 	function hotDownloadUpdateChunk(chunkId) { // eslint-disable-line no-unused-vars
/******/ 		var head = document.getElementsByTagName("head")[0];
/******/ 		var script = document.createElement("script");
/******/ 		script.type = "text/javascript";
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		head.appendChild(script);
/******/ 	}
/******/ 	
/******/ 	function hotDownloadManifest() { // eslint-disable-line no-unused-vars
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if(typeof XMLHttpRequest === "undefined")
/******/ 				return reject(new Error("No browser support"));
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = 10000;
/******/ 				request.send(null);
/******/ 			} catch(err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if(request.readyState !== 4) return;
/******/ 				if(request.status === 0) {
/******/ 					// timeout
/******/ 					reject(new Error("Manifest request to " + requestPath + " timed out."));
/******/ 				} else if(request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if(request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch(e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	
/******/ 	
/******/ 	var hotApplyOnUpdate = true;
/******/ 	var hotCurrentHash = "bffeccf305e9025e73dc"; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParents = []; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = []; // eslint-disable-line no-unused-vars
/******/ 	
/******/ 	function hotCreateRequire(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var me = installedModules[moduleId];
/******/ 		if(!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if(me.hot.active) {
/******/ 				if(installedModules[request]) {
/******/ 					if(installedModules[request].parents.indexOf(moduleId) < 0)
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if(me.children.indexOf(request) < 0)
/******/ 					me.children.push(request);
/******/ 			} else {
/******/ 				console.warn("[HMR] unexpected require(" + request + ") from disposed module " + moduleId);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for(var name in __webpack_require__) {
/******/ 			if(Object.prototype.hasOwnProperty.call(__webpack_require__, name) && name !== "e") {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if(hotStatus === "ready")
/******/ 				hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/ 	
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if(hotStatus === "prepare") {
/******/ 					if(!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if(hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/ 	
/******/ 	function hotCreateModule(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/ 	
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfAccepted = true;
/******/ 				else if(typeof dep === "function")
/******/ 					hot._selfAccepted = dep;
/******/ 				else if(typeof dep === "object")
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else
/******/ 					hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfDeclined = true;
/******/ 				else if(typeof dep === "object")
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else
/******/ 					hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if(idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if(!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if(idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/ 	
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/ 	
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for(var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/ 	
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/ 	
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/ 	
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = (+id) + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/ 	
/******/ 	function hotCheck(apply) {
/******/ 		if(hotStatus !== "idle") throw new Error("check() is only allowed in idle status");
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest().then(function(update) {
/******/ 			if(!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/ 	
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = 0;
/******/ 			{ // eslint-disable-line no-lone-blocks
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if(hotStatus === "prepare" && hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/ 	
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) { // eslint-disable-line no-unused-vars
/******/ 		if(!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for(var moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if(!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if(!deferred) return;
/******/ 		if(hotApplyOnUpdate) {
/******/ 			hotApply(hotApplyOnUpdate).then(function(result) {
/******/ 				deferred.resolve(result);
/******/ 			}, function(err) {
/******/ 				deferred.reject(err);
/******/ 			});
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for(var id in hotUpdate) {
/******/ 				if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotApply(options) {
/******/ 		if(hotStatus !== "ready") throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 	
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/ 	
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/ 	
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while(queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if(!module || module.hot._selfAccepted)
/******/ 					continue;
/******/ 				if(module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if(module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for(var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if(!parent) continue;
/******/ 					if(parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if(outdatedModules.indexOf(parentId) >= 0) continue;
/******/ 					if(parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if(!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 	
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/ 	
/******/ 		function addAllToSet(a, b) {
/******/ 			for(var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if(a.indexOf(item) < 0)
/******/ 					a.push(item);
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/ 	
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn("[HMR] unexpected require(" + result.moduleId + ") to disposed module");
/******/ 		};
/******/ 	
/******/ 		for(var id in hotUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				var result;
/******/ 				if(hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if(result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch(result.type) {
/******/ 					case "self-declined":
/******/ 						if(options.onDeclined)
/******/ 							options.onDeclined(result);
/******/ 						if(!options.ignoreDeclined)
/******/ 							abortError = new Error("Aborted because of self decline: " + result.moduleId + chainInfo);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if(options.onDeclined)
/******/ 							options.onDeclined(result);
/******/ 						if(!options.ignoreDeclined)
/******/ 							abortError = new Error("Aborted because of declined dependency: " + result.moduleId + " in " + result.parentId + chainInfo);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if(options.onUnaccepted)
/******/ 							options.onUnaccepted(result);
/******/ 						if(!options.ignoreUnaccepted)
/******/ 							abortError = new Error("Aborted because " + moduleId + " is not accepted" + chainInfo);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if(options.onAccepted)
/******/ 							options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if(options.onDisposed)
/******/ 							options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if(abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if(doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for(moduleId in result.outdatedDependencies) {
/******/ 						if(Object.prototype.hasOwnProperty.call(result.outdatedDependencies, moduleId)) {
/******/ 							if(!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(outdatedDependencies[moduleId], result.outdatedDependencies[moduleId]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if(doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for(i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if(installedModules[moduleId] && installedModules[moduleId].hot._selfAccepted)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/ 	
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if(hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/ 	
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while(queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if(!module) continue;
/******/ 	
/******/ 			var data = {};
/******/ 	
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for(j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/ 	
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/ 	
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/ 	
/******/ 			// remove "parents" references from all children
/******/ 			for(j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if(!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if(idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for(moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				module = installedModules[moduleId];
/******/ 				if(module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for(j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if(idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/ 	
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/ 	
/******/ 		// insert new code
/******/ 		for(moduleId in appliedUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for(moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				module = installedModules[moduleId];
/******/ 				moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 				var callbacks = [];
/******/ 				for(i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 					dependency = moduleOutdatedDependencies[i];
/******/ 					cb = module.hot._acceptedDependencies[dependency];
/******/ 					if(callbacks.indexOf(cb) >= 0) continue;
/******/ 					callbacks.push(cb);
/******/ 				}
/******/ 				for(i = 0; i < callbacks.length; i++) {
/******/ 					cb = callbacks[i];
/******/ 					try {
/******/ 						cb(moduleOutdatedDependencies);
/******/ 					} catch(err) {
/******/ 						if(options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "accept-errored",
/******/ 								moduleId: moduleId,
/******/ 								dependencyId: moduleOutdatedDependencies[i],
/******/ 								error: err
/******/ 							});
/******/ 						}
/******/ 						if(!options.ignoreErrored) {
/******/ 							if(!error)
/******/ 								error = err;
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Load self accepted modules
/******/ 		for(i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch(err) {
/******/ 				if(typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch(err2) {
/******/ 						if(options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								orginalError: err
/******/ 							});
/******/ 						}
/******/ 						if(!options.ignoreErrored) {
/******/ 							if(!error)
/******/ 								error = err2;
/******/ 						}
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if(options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if(!options.ignoreErrored) {
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if(error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/ 	
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(58)(__webpack_require__.s = 58);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(122)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(121)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getClassname;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_platform_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_classnames__ = __webpack_require__(3);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var osname = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_platform_js__["a" /* platform */])();

function getClassname(base) {
  var _classnames;

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_classnames__["a" /* default */])(base, (_classnames = {}, _defineProperty(_classnames, base + '--ios', osname === __WEBPACK_IMPORTED_MODULE_0__lib_platform_js__["c" /* IOS */]), _defineProperty(_classnames, base + '--android', osname === __WEBPACK_IMPORTED_MODULE_0__lib_platform_js__["b" /* ANDROID */]), _classnames));
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = classNames;
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function classNames() {
  var result = [];

  [].concat(Array.prototype.slice.call(arguments)).forEach(function (item) {
    if (!item) {
      return;
    }
    switch (typeof item === 'undefined' ? 'undefined' : _typeof(item)) {
      case 'string':
        result.push(item);
        break;
      case 'object':
        Object.keys(item).forEach(function (key) {
          if (item[key]) {
            result.push(key);
          }
        });
        break;
      default:
        result.push('' + item);
    }
  });

  return result.join(' ');
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = removeObjectKeys;
function removeObjectKeys() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var newObj = Object.assign({}, obj);

  keys.forEach(function (key) {
    return delete newObj[key];
  });

  return newObj;
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ANDROID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return IOS; });
/* harmony export (immutable) */ __webpack_exports__["a"] = platform;
var ANDROID = 'android';
var IOS = 'ios';

var ua = void 0;
var platformName = void 0;

function platform(useragent) {
  if (!ua) {
    ua = useragent || navigator && navigator.userAgent || '';
  }
  if (!platformName) {
    platformName = /android/i.test(ua) ? ANDROID : IOS;
  }

  return platformName;
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var requestAnimationFrame = typeof window !== 'undefined' && window.requestAnimationFrame ? window.requestAnimationFrame : function (cb) {
  return setTimeout(cb, 1000 / 60);
};

/* harmony default export */ __webpack_exports__["a"] = (requestAnimationFrame);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Tappable_css__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Tappable_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Tappable_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Touch_Touch__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_getClassName__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_removeObjectKeys__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_platform__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_offset__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Touch_TouchUtils__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lib_requestAnimationFrame__ = __webpack_require__(6);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var ts = function ts() {
  return +Date.now();
};
var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers_getClassName__["a" /* default */])('Tappable');
var osname = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__lib_platform__["a" /* platform */])();

var ACTIVE_DELAY = 70;
var ACTIVE_EFFECT_DELAY = 600;

var storage = {};

/**
 * Очищает таймауты и хранилище для всех экземпляров компонента, кроме переданного
 *
 * @param {String} exclude ID экземпляра-исключения
 * @returns {void}
 */
function deactivateOtherInstances(exclude) {
  Object.keys(storage).filter(function (id) {
    return id !== exclude;
  }).forEach(function (id) {
    clearTimeout(storage[id].activeTimeout);
    clearTimeout(storage[id].timeout);
    storage[id].stop();

    delete storage[id];
  });
}

var Tappable = function (_Component) {
  _inherits(Tappable, _Component);

  function Tappable(props) {
    _classCallCheck(this, Tappable);

    var _this = _possibleConstructorReturn(this, (Tappable.__proto__ || Object.getPrototypeOf(Tappable)).call(this, props));

    _this.isSlide = false;

    _this.onStart = function (_ref) {
      var originalEvent = _ref.originalEvent;

      if (originalEvent.touches && originalEvent.touches.length > 1) {
        return deactivateOtherInstances();
      }

      if (osname === __WEBPACK_IMPORTED_MODULE_7__lib_platform__["b" /* ANDROID */]) {
        _this.onDown(originalEvent);
      }

      storage[_this.id] = {};
      _this.getStorage().stop = _this.stop;
      _this.getStorage().activeTimeout = setTimeout(_this.start, ACTIVE_DELAY);
    };

    _this.onMove = function (e) {
      if (e.shiftXAbs > 20 || e.shiftYAbs > 20) {
        _this.isSlide = true;
        _this.stop();
      }
    };

    _this.onEnd = function (_ref2) {
      var originalEvent = _ref2.originalEvent;

      var now = ts();

      if (originalEvent.touches && originalEvent.touches.length > 0) {
        _this.isSlide = false;
        return;
      }

      if (_this.state.active) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__lib_requestAnimationFrame__["a" /* default */])(_this.callback);

        if (now - _this.state.ts >= 100) {
          // Долгий тап, выключаем подсветку
          _this.stop();
        } else {
          // Короткий тап, оставляем подсветку
          var timeout = setTimeout(_this.stop, ACTIVE_EFFECT_DELAY - now + _this.state.ts);
          var store = _this.getStorage();

          if (store) {
            store.timeout = timeout;
          }
        }
      } else if (!_this.isSlide) {
        // Очень короткий тап, включаем подсветку
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__lib_requestAnimationFrame__["a" /* default */])(_this.callback);

        _this.start();

        var _timeout = setTimeout(_this.stop, ACTIVE_EFFECT_DELAY);

        if (_this.getStorage()) {
          clearTimeout(_this.getStorage().activeTimeout);
          _this.getStorage().timeout = _timeout;
        } else {
          _this.timeout = _timeout;
        }
      }

      _this.isSlide = false;
    };

    _this.onDown = function (e) {
      var _getOffsetRect = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__lib_offset__["a" /* getOffsetRect */])(_this.container),
          top = _getOffsetRect.top,
          left = _getOffsetRect.left;

      var x = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__Touch_TouchUtils__["b" /* coordX */])(e);
      var y = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__Touch_TouchUtils__["c" /* coordY */])(e);
      var key = 'wave' + Date.now().toString();

      _this.setState(function (state) {
        return {
          clicks: Object.assign({}, state.clicks, _defineProperty({}, key, {
            x: Math.round(x - left),
            y: Math.round(y - top)
          }))
        };
      });

      _this.wavesTimeout = setTimeout(function () {
        _this.setState(function (state) {
          var clicks = Object.assign({}, state.clicks);
          delete clicks[key];
          return { clicks: clicks };
        });
      }, 225);
    };

    _this.callback = function () {
      if (_this.props.onClick) {
        _this.props.onClick();
      }
    };

    _this.start = function () {
      if (!_this.state.active) {
        _this.setState({
          active: true,
          ts: ts()
        });
      }
      deactivateOtherInstances(_this.id);
    };

    _this.stop = function () {
      if (_this.state.active) {
        _this.setState({
          active: false,
          ts: null
        });
      }
      if (_this.getStorage()) {
        clearTimeout(_this.getStorage().activeTimeout);
        delete storage[_this.id];
      }
    };

    _this.getStorage = function () {
      return storage[_this.id];
    };

    _this.getContainer = function (container) {
      if (container) {
        _this.container = container.container || container;
      }
      return;
    };

    _this.id = Math.round(Math.random() * 1e8).toString(16);
    _this.state = {
      clicks: {},
      active: false,
      ts: null
    };
    return _this;
  }

  /**
   * Обрабатывает событие touchstart
   *
   * @returns {void}
   */


  /**
   * Обрабатывает событие touchmove
   *
   * @returns {void}
   */


  /**
   * Обрабатывает событие touchdown
   *
   * @returns {void}
   */


  /**
   * Реализует эффект при тапе для Андроида
   *
   * @returns {void}
   */


  /**
   * Вызывает колбек, переданный родителем
   *
   * @returns {void}
   */


  /**
   * Устанавливает активное выделение
   *
   * @returns {void}
   */


  /**
   * Снимает активное выделение
   *
   * @returns {void}
   */


  /**
   * Возвращает хранилище для экземпляра компонента
   *
   * @returns {Object} Хранилище для текущего экземпляра компонента
   */


  /**
   * Берет ref на DOM-ноду из экземпляра Touch
   *
   * @param {React.Component} container Touch component instance
   * @returns {void}
   */


  _createClass(Tappable, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (storage[this.id]) {
        clearTimeout(storage[this.id].timeout);
        clearTimeout(storage[this.id].activeTimeout);

        delete storage[this.id];
      }

      clearTimeout(this.wavesTimeout);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          clicks = _state.clicks,
          active = _state.active;

      var Component = this.props.onClick ? __WEBPACK_IMPORTED_MODULE_3__Touch_Touch__["a" /* default */] : this.props.component;
      var classes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_classnames__["a" /* default */])(baseClassNames, this.props.className, {
        'Tappable--active': active,
        'Tappable--inactive': !active
      });

      var props = {};

      if (this.props.onClick) {
        props.component = this.props.component;
        props.onStart = this.onStart;
        props.onMove = this.onMove;
        props.onEnd = this.onEnd;
        props.ref = this.getContainer;
      }

      var nativeProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_removeObjectKeys__["a" /* default */])(Object.assign({}, this.props), ['onClick', 'children', 'className', 'component']);

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        Component,
        _extends({ className: classes }, props, nativeProps),
        osname === __WEBPACK_IMPORTED_MODULE_7__lib_platform__["b" /* ANDROID */] && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'span',
          { className: 'Tappable__waves', ref: this.getContainer },
          Object.keys(clicks).map(function (k) {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('span', { className: 'Tappable__wave', style: { top: clicks[k].y, left: clicks[k].x }, key: k });
          })
        ),
        this.props.children
      );
    }
  }]);

  return Tappable;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Tappable.propTypes = {
  onClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,
  component: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.element])
};
Tappable.defaultProps = {
  component: 'div'
};
/* harmony default export */ __webpack_exports__["a"] = (Tappable);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TouchUtils__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_removeObjectKeys__ = __webpack_require__(4);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var events = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__TouchUtils__["a" /* getSupportedEvents */])();

// amazing hack for preventing vertical scroll during horizontal swipe
// (in View, Slider, Gallery). todo: requires investigation
window.addEventListener('touchmove', function () {});

var Touch = function (_Component) {
  _inherits(Touch, _Component);

  function Touch() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Touch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Touch.__proto__ || Object.getPrototypeOf(Touch)).call.apply(_ref, [this].concat(args))), _this), _this.cancelClick = false, _this.gesture = {}, _this.onStart = function (e) {
      _this.gesture = {
        startX: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__TouchUtils__["b" /* coordX */])(e),
        startY: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__TouchUtils__["c" /* coordY */])(e),
        startT: new Date(),
        isPressed: true
      };

      // Вызываем нужные колбеки из props
      var outputEvent = Object.assign({}, _this.gesture, {
        originalEvent: e
      });

      if (_this.props.onStart) {
        _this.props.onStart(outputEvent);
      }

      if (_this.props.onStartX) {
        _this.props.onStartX(outputEvent);
      }

      if (_this.props.onStartY) {
        _this.props.onStartY(outputEvent);
      }

      document.body.addEventListener(events[1], _this.onMove, { capture: _this.props.useCapture, passive: false });
      document.body.addEventListener(events[2], _this.onEnd, { capture: _this.props.useCapture, passive: false });
      document.body.addEventListener(events[3], _this.onEnd, { capture: _this.props.useCapture, passive: false });
    }, _this.onMove = function (e) {
      var _this$gesture = _this.gesture,
          isPressed = _this$gesture.isPressed,
          isX = _this$gesture.isX,
          isY = _this$gesture.isY,
          startX = _this$gesture.startX,
          startY = _this$gesture.startY;


      if (isPressed) {
        // смещения
        var shiftX = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__TouchUtils__["b" /* coordX */])(e) - startX;
        var shiftY = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__TouchUtils__["c" /* coordY */])(e) - startY;

        // абсолютные значения смещений
        var shiftXAbs = Math.abs(shiftX);
        var shiftYAbs = Math.abs(shiftY);

        // Если определяем мультитач, то прерываем жест
        if (!!e.touches && e.touches.length > 1) {
          return _this.onEnd(e);
        }

        // если мы ещё не определились
        if (!isX && !isY) {
          var willBeX = shiftXAbs >= 5 && shiftXAbs > shiftYAbs;
          var willBeY = shiftYAbs >= 5 && shiftYAbs > shiftXAbs;
          var willBeSlidedX = willBeX && !!_this.props.onMoveX || !!_this.props.onMove;
          var willBeSlidedY = willBeY && !!_this.props.onMoveY || !!_this.props.onMove;

          _this.gesture.isY = willBeY;
          _this.gesture.isX = willBeX;
          _this.gesture.isSlideX = willBeSlidedX;
          _this.gesture.isSlideY = willBeSlidedY;
          _this.gesture.isSlide = willBeSlidedX || willBeSlidedY;
        }

        if (_this.gesture.isSlide) {
          _this.gesture.shiftX = shiftX;
          _this.gesture.shiftY = shiftY;
          _this.gesture.shiftXAbs = shiftXAbs;
          _this.gesture.shiftYAbs = shiftYAbs;

          // Вызываем нужные колбеки из props
          var outputEvent = Object.assign({}, _this.gesture, {
            originalEvent: e
          });

          if (_this.props.onMove) {
            _this.props.onMove(outputEvent);
          }

          if (_this.gesture.isSlideX && _this.props.onMoveX) {
            _this.props.onMoveX(outputEvent);
          }

          if (_this.gesture.isSlideY && _this.props.onMoveY) {
            _this.props.onMoveY(outputEvent);
          }
        }
      }
    }, _this.onEnd = function (e) {
      var _this$gesture2 = _this.gesture,
          isPressed = _this$gesture2.isPressed,
          isSlide = _this$gesture2.isSlide,
          isSlideX = _this$gesture2.isSlideX,
          isSlideY = _this$gesture2.isSlideY;


      if (isPressed) {
        // Вызываем нужные колбеки из props
        var outputEvent = Object.assign({}, _this.gesture, {
          originalEvent: e
        });

        if (_this.props.onEnd) {
          _this.props.onEnd(outputEvent);
        }

        if (isSlideY && _this.props.onEndY) {
          _this.props.onEndY(outputEvent);
        }

        if (isSlideX && _this.props.onEndX) {
          _this.props.onEndX(outputEvent);
        }
      }

      // Если закончили жест на ссылке, выставляем флаг для отмены перехода
      _this.cancelClick = e.target.tagName === 'A' && isSlide;
      _this.gesture = {};

      document.body.removeEventListener(events[1], _this.onMove, { capture: _this.props.useCapture, passive: false });
      document.body.removeEventListener(events[2], _this.onEnd, { capture: _this.props.useCapture, passive: false });
      document.body.removeEventListener(events[3], _this.onEnd, { capture: _this.props.useCapture, passive: false });
    }, _this.onDragStart = function (e) {
      if (e.target.tagName === 'A' || e.target.tagName === 'IMG') {
        return e.preventDefault();
      } else return;
    }, _this.onClick = function (e) {
      if (_this.cancelClick) {
        _this.cancelClick = false;

        return e.preventDefault();
      }
    }, _this.getRef = function (container) {
      _this.container = container;
      return;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Touch, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.container.addEventListener(events[0], this.onStart, { capture: this.props.useCapture, passive: false });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.container.removeEventListener(events[0], this.onStart, { capture: this.props.useCapture, passive: false });
    }

    /**
     * Обработчик событий touchstart
     *
     * @param {Object} e Браузерное событие
     * @param {Object} props Component props
     * @returns {void}
     */


    /**
     * Обработчик событий touchmove
     *
     * @param {Object} e Браузерное событие
     * @param {Object} props Component props
     * @returns {void}
     */


    /**
     * Обработчик событий touchend, touchcancel
     *
     * @param {Object} e Браузерное событие
     * @param {Object} props Component props
     * @returns {void}
     */


    /**
     * Обработчик событий dragstart
     * Отменяет нативное браузерное поведение для вложенных ссылок и изображений
     *
     * @param {Object} e Браузерное событие
     * @returns {void}
     */


    /**
     * Обработчик клика по компоненту
     * Отменяет переход по вложенной ссылке, если был зафиксирован свайп
     *
     * @param {Object} e Браузерное событие
     * @returns {void}
     */

  }, {
    key: 'render',
    value: function render() {
      var handlers = {
        onDragStart: this.onDragStart,
        onClick: this.onClick
      };
      var ComponentName = this.props.component;
      var nativeProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_removeObjectKeys__["a" /* default */])(Object.assign({}, this.props), ['onStart', 'onStartX', 'onStartY', 'onMove', 'onMoveX', 'onMoveY', 'onEnd', 'onEndX', 'onEndY', 'useCapture', 'component']);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        ComponentName,
        _extends({}, handlers, nativeProps, { ref: this.getRef }),
        this.props.children
      );
    }
  }]);

  return Touch;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Touch.propTypes = {
  onStart: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onStartX: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onStartY: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onMove: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onMoveX: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onMoveY: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onEnd: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onEndX: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onEndY: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  useCapture: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  component: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node
};
Touch.defaultProps = {
  component: 'div',
  children: '',
  useCapture: true
};
/* harmony default export */ __webpack_exports__["a"] = (Touch);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(96);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_getClassName__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_removeObjectKeys__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PopoutWrapper_css__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PopoutWrapper_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__PopoutWrapper_css__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helpers_getClassName__["a" /* default */])('PopoutWrapper');

var PopoutWrapper = function (_React$Component) {
  _inherits(PopoutWrapper, _React$Component);

  function PopoutWrapper() {
    _classCallCheck(this, PopoutWrapper);

    return _possibleConstructorReturn(this, (PopoutWrapper.__proto__ || Object.getPrototypeOf(PopoutWrapper)).apply(this, arguments));
  }

  _createClass(PopoutWrapper, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var containerClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_classnames__["a" /* default */])('PopoutWrapper__container', (_classnames = {}, _defineProperty(_classnames, 'PopoutWrapper__container--v-' + this.props.v, true), _defineProperty(_classnames, 'PopoutWrapper__container--h-' + this.props.h, true), _classnames));

      var classNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_classnames__["a" /* default */])(baseClassNames, _defineProperty({}, 'PopoutWrapper--closing', this.props.closing));

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        _extends({ className: classNames, onClick: this.props.onClick }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_removeObjectKeys__["a" /* default */])(this.props, ['hasMask', 'v', 'h', 'closing', 'style'])),
        this.props.hasMask && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'PopoutWrapper__mask' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: containerClassNames, style: this.props.style },
          this.props.children
        )
      );
    }
  }]);

  return PopoutWrapper;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

PopoutWrapper.propTypes = {
  hasMask: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
  v: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(['top', 'center', 'bottom']),
  h: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(['left', 'center', 'right']),
  closing: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool
};
PopoutWrapper.defaultProps = {
  hasMask: true,
  v: 'center',
  h: 'center',
  closing: false
};
/* harmony default export */ __webpack_exports__["a"] = (PopoutWrapper);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(107);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Button_css__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Button_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Button_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_removeObjectKeys__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Tappable_Tappable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_getClassName__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__helpers_getClassName__["a" /* default */])('Button');

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          children = _props.children,
          alignment = _props.alignment,
          appearance = _props.appearance,
          wide = _props.wide,
          className = _props.className,
          component = _props.component;

      var modifiers = {
        'Button--left': alignment === 'left',
        'Button--center': alignment === 'center',
        'Button--right': alignment === 'right',
        'Button--primary': appearance === 'primary',
        'Button--default': appearance === 'default',
        'Button--danger': appearance === 'danger',
        'Button--vk-wide': appearance === 'vk-wide',
        'Button--vk-wide-primary': appearance === 'vk-wide-primary',
        'Button--vk-rich': appearance === 'vk-rich',
        'Button--vk-primary': appearance === 'vk-primary',
        'Button--vk-secondary': appearance === 'vk-secondary',
        'Button--vk-tertiary': appearance === 'vk-tertiary',
        'Button--wide': wide
      };
      var nativeProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_removeObjectKeys__["a" /* default */])(this.props, ['alignment', 'appearance', 'wide', 'className', 'component']);

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5__Tappable_Tappable__["a" /* default */],
        _extends({
          component: component,
          className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_classnames__["a" /* default */])(baseClassNames, className, modifiers),
          style: style
        }, nativeProps),
        children
      );
    }
  }]);

  return Button;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Button.propTypes = {
  style: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
  alignment: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(['left', 'center', 'right']),
  appearance: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(['primary', 'default', 'danger', 'vk-wide-primary', 'vk-wide', 'vk-rich', 'vk-primary', 'vk-secondary', 'vk-tertiary']),
  wide: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  component: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
};
Button.defaultProps = {
  style: {},
  alignment: 'left',
  appearance: 'default',
  type: 'default',
  wide: true,
  children: '',
  component: 'button'
};
/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = FormLayout;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FormLayout_css__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FormLayout_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__FormLayout_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_getClassName__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_removeObjectKeys__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_classnames__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers_getClassName__["a" /* default */])('FormLayout');

function FormLayout(props) {
  var children = Array.isArray(props.children) ? props.children : [props.children];
  var TagName = props.tagName || 'form';
  var modifiers = {
    'FormLayout--web': props.mod === 'web'
  };

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    TagName,
    _extends({ className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__lib_classnames__["a" /* default */])(baseClassNames, modifiers) }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_removeObjectKeys__["a" /* default */])(props, ['tagName', 'mod', 'allowSubmit'])),
    children.map(function (field, i) {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'label',
        { className: 'FormLayout__row', key: field.key || 'row-' + i },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { className: 'FormLayout__separator' }),
        !!field.props.label && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: 'FormLayout__label' },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: 'FormLayout__label-in' },
            field.props.label
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: 'FormLayout__field' },
          field,
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { className: 'FormLayout__underline' })
        )
      );
    }),
    TagName === 'form' && props.allowSubmit && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { type: 'submit', style: { display: 'none' } })
  );
}

FormLayout.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,
  style: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
  tagName: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  mod: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  allowSubmit: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool
};

FormLayout.defaultProps = {
  allowSubmit: true
};

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Input_css__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Input_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Input_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_getClassName__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_removeObjectKeys__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_requestAnimationFrame__ = __webpack_require__(6);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers_getClassName__["a" /* default */])('Input');

var Input = function (_Component) {
  _inherits(Input, _Component);

  function Input(props) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    _this.onChange = function (e) {
      if (!_this.isControlledOutside) {
        _this.setState({ value: e.target.value });
      }
      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    };

    _this.getRef = function (element) {
      _this.element = element;
    };

    if (typeof props.value !== 'undefined') {
      _this.isControlledOutside = true;
    } else {
      _this.state = {
        value: props.initialValue || ''
      };
    }
    return _this;
  }

  _createClass(Input, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (prevProps.value && this.props.value === '') {
        // Fix iOS extra indent on removing content
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_requestAnimationFrame__["a" /* default */])(function () {
          _this2.element.value = '';
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          alignment = _props.alignment,
          value = _props.value;

      var modifiers = {
        'Input--left': alignment === 'left',
        'Input--center': alignment === 'center',
        'Input--right': alignment === 'right'
      };

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', _extends({
        className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__lib_classnames__["a" /* default */])(baseClassNames, modifiers)
      }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_removeObjectKeys__["a" /* default */])(this.props, ['onChange', 'initialValue', 'alignment']), {
        ref: this.getRef,
        value: this.isControlledOutside ? value : this.state.value,
        onChange: this.onChange
      }));
    }
  }]);

  return Input;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Input.propTypes = {
  type: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(['text', 'password', 'date', 'datetime-local', 'time', 'month', 'email', 'number', 'tel', 'url']),
  alignment: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(['left', 'center', 'right']),
  value: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  initialValue: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  onChange: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func
};
Input.defaultProps = {
  type: 'text',
  initialValue: '',
  alignment: 'left'
};
/* harmony default export */ __webpack_exports__["a"] = (Input);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Spinner_css__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Spinner_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Spinner_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_getClassName__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_platform__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_classnames_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__AndroidSpinner__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__IosSpinner__ = __webpack_require__(57);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var osname = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_platform__["a" /* platform */])();
var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers_getClassName__["a" /* default */])('Spinner');

var Spinner = function (_Component) {
  _inherits(Spinner, _Component);

  function Spinner() {
    _classCallCheck(this, Spinner);

    return _possibleConstructorReturn(this, (Spinner.__proto__ || Object.getPrototypeOf(Spinner)).apply(this, arguments));
  }

  _createClass(Spinner, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          on = _props.on,
          progress = _props.progress,
          size = _props.size,
          style = _props.style;

      var isAnimated = on && progress === null;
      var modifiers = {
        'Spinner--on': isAnimated
      };

      var Component = osname === __WEBPACK_IMPORTED_MODULE_4__lib_platform__["c" /* IOS */] ? __WEBPACK_IMPORTED_MODULE_7__IosSpinner__["a" /* default */] : __WEBPACK_IMPORTED_MODULE_6__AndroidSpinner__["a" /* default */];

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__lib_classnames_js__["a" /* default */])(baseClassNames, modifiers), style: style },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'svg',
          {
            className: 'Spinner__self',
            style: { width: size, height: size },
            viewBox: '0 0 ' + size + ' ' + size,
            xmlns: 'http://www.w3.org/2000/svg'
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Component, this.props)
        )
      );
    }
  }]);

  return Spinner;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Spinner.propTypes = {
  style: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
  color: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  size: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  androidStrokeWidth: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  on: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  progress: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number
};
Spinner.defaultProps = {
  color: osname === __WEBPACK_IMPORTED_MODULE_4__lib_platform__["b" /* ANDROID */] ? '#5181b8' : '#262626',
  androidStrokeWidth: 4,
  size: osname === __WEBPACK_IMPORTED_MODULE_4__lib_platform__["b" /* ANDROID */] ? 38 : 20,
  animated: true,
  on: true,
  progress: null
};
/* harmony default export */ __webpack_exports__["a"] = (Spinner);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = keyframes;
function keyframes(name, obj) {
  if (!name || !obj) {
    return '';
  }

  var selectors = Object.keys(obj).map(function (key) {
    return key + ' {' + Object.keys(obj[key]).map(function (k) {
      return k + ':' + obj[key][k];
    }).join(';') + '}';
  }).join('');

  return '@-webkit-keyframes ' + name + ' {' + selectors + '} @keyframes ' + name + ' {' + selectors + '}';
}

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getOffsetRect;
function getOffsetRect(elem) {
  var box = elem.getBoundingClientRect();
  var body = document.body;
  var doc = document.documentElement;
  var scrollTop = window.pageYOffset || doc.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || doc.scrollLeft || body.scrollLeft;
  var clientTop = doc.clientTop || body.clientTop || 0;
  var clientLeft = doc.clientLeft || body.clientLeft || 0;

  return {
    top: Math.round(box.top + scrollTop - clientTop),
    left: Math.round(box.left + scrollLeft - clientLeft),
    width: elem.offsetWidth,
    height: elem.offsetHeight
  };
}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getSupportedEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return coordX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return coordY; });

/**
 * Получает кординату по оси абсцисс из touch- или mouse-события
 *
 * @param {Object} e Бразуерное событие
 * @returns {Number} Координата взаимодействия по оси абсцисс
 */
var coordX = function coordX(e) {
  return e.clientX || e.touches && e.touches[0].clientX;
};

/**
 * Получает кординату по оси ординат из touch- или mouse-события
 *
 * @param {Object} e Бразуерное событие
 * @returns {Number} Координата взаимодействия по оси ординат
 */
var coordY = function coordY(e) {
  return e.clientY || e.touches && e.touches[0].clientY;
};

/**
 * Возвращает массив поддерживаемых событий
 * Если браузер поддерживает pointer events или подключена handjs, вернет события указателя.
 * Если нет, используем события мыши
 *
 * @returns {Array} Массив с названиями событий
 */
function getSupportedEvents() {
  var isClient = typeof window !== 'undefined';
  var touchEnabled = isClient && 'ontouchstart' in window;

  if (touchEnabled) {
    return ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
  }

  return ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];
}



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var supported = void 0,
    prefix = void 0;

if (typeof document !== 'undefined' && document.createElement) {
  var d = document.createElement('div');

  for (var i in d.style) {
    var m = i.match(/^(moz|webkit|ms|)(transition|animation)$/i);
    if (m) supported = true;
    if (m && m[1]) prefix = m[1];
  }
}

/* harmony default export */ __webpack_exports__["a"] = ({ supported: supported, prefix: prefix });

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(12);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(14),
    getRawTag = __webpack_require__(103),
    objectToString = __webpack_require__(105);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _isPlainObject = __webpack_require__(115);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _prefix = __webpack_require__(124);

var _prefix2 = _interopRequireDefault(_prefix);

var _supports = __webpack_require__(125);

var _supports2 = _interopRequireDefault(_supports);

var _constants = __webpack_require__(123);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var toKebabCase = function toKebabCase(string) {
  return string.replace(/([A-Z])/g, function ($1) {
    return '-' + $1.toLowerCase();
  });
};

/**
 * create a new style object with prefixes applied
 *
 * @param {Object} object
 * @returns {Object}
 */
var applyPrefixes = function applyPrefixes(object) {
  if (!(0, _isPlainObject2.default)(object)) {
    return object;
  }

  var value = void 0;

  return Object.keys(object).reduce(function (styleObject, originalKey) {
    var key = originalKey;

    value = object[key];

    if ((0, _isPlainObject2.default)(value)) {
      return _extends({}, styleObject, _defineProperty({}, key, applyPrefixes(value)));
    }

    if (_constants.CSS_PROPERTIES.indexOf(key) !== -1 && !(0, _supports2.default)(toKebabCase(key))) {
      key = '' + _prefix2.default.js + key.charAt(0).toUpperCase() + key.slice(1);
    }

    if (originalKey === 'display' && object[originalKey] === 'flex' && !(0, _supports2.default)('display', 'flex')) {
      return _extends({}, styleObject, _defineProperty({}, key, _prefix2.default.js === 'ms' ? '-ms-flexbox' : _prefix2.default.css + 'flex'));
    }

    if (originalKey === 'transition') {
      var animatableValuesObject = _constants.ANIMATABLE_VALUES.reduce(function (animatableValues, animatableValue) {
        var kebabValue = toKebabCase(animatableValue);
        var re = new RegExp(kebabValue, 'g');

        if (re.test(object[originalKey]) && !(0, _supports2.default)(kebabValue)) {
          var cleanValue = object[originalKey].replace(re, '' + _prefix2.default.css + kebabValue);

          return _extends({}, animatableValues, _defineProperty({}, key, cleanValue));
        }

        return animatableValues;
      }, {});

      return _extends({}, styleObject, animatableValuesObject);
    }

    return _extends({}, styleObject, _defineProperty({}, key, value));
  }, {});
};

exports.default = applyPrefixes;
module.exports = exports['default'];

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ActionSheetItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Tappable_Tappable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PopoutWrapper_PopoutWrapper__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ActionSheet_css__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ActionSheet_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__ActionSheet_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_platform__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_transitionEvents__ = __webpack_require__(23);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var osname = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__lib_platform__["a" /* platform */])();

var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__["a" /* default */])('ActionSheet');
var itemClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__["a" /* default */])('ActionSheet-Item');

var ActionSheet = function (_React$Component) {
  _inherits(ActionSheet, _React$Component);

  function ActionSheet() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ActionSheet);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ActionSheet.__proto__ || Object.getPrototypeOf(ActionSheet)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      closing: false,
      opened: false
    }, _this.onClose = function () {
      _this.setState({ closing: true });
      _this.waitTransitionFinish(_this.el, _this.props.onClose);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ActionSheet, [{
    key: 'waitTransitionFinish',
    value: function waitTransitionFinish(elem, eventHandler) {
      if (__WEBPACK_IMPORTED_MODULE_8__lib_transitionEvents__["a" /* default */].supported) {
        var eventName = __WEBPACK_IMPORTED_MODULE_8__lib_transitionEvents__["a" /* default */].prefix ? __WEBPACK_IMPORTED_MODULE_8__lib_transitionEvents__["a" /* default */].prefix + 'TransitionEnd' : 'transitionend';

        elem.removeEventListener(eventName, eventHandler);
        elem.addEventListener(eventName, eventHandler);
      } else {
        setTimeout(eventHandler.bind(this), osname === __WEBPACK_IMPORTED_MODULE_7__lib_platform__["b" /* ANDROID */] ? 200 : 300);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        return _this2.setState({ opened: true });
      }, osname === __WEBPACK_IMPORTED_MODULE_7__lib_platform__["b" /* ANDROID */] ? 200 : 300);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var style = this.props.style;

      var children = [];
      var hasHeader = osname === __WEBPACK_IMPORTED_MODULE_7__lib_platform__["c" /* IOS */] && (this.props.title || this.props.text);
      var classNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__lib_classnames__["a" /* default */])(baseClassNames, {
        'ActionSheet--closing': this.state.closing
      });

      __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.forEach(this.props.children, function (Child, index) {
        children.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(Child, {
          key: '' + index,
          onClick: function onClick() {
            _this3.setState({ closing: true });
            _this3.waitTransitionFinish(_this3.el, Child.props.onClick);
          }
        }));
        if (osname === __WEBPACK_IMPORTED_MODULE_7__lib_platform__["c" /* IOS */] && index < _this3.props.children.length - 1) children.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { key: 'separator-' + index, className: 'ActionSheet__separator' }));
      });

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__PopoutWrapper_PopoutWrapper__["a" /* default */],
        {
          closing: this.state.closing,
          v: osname === __WEBPACK_IMPORTED_MODULE_7__lib_platform__["c" /* IOS */] ? 'bottom' : 'center',
          h: 'center',
          onClick: function onClick() {
            return _this3.state.opened && _this3.onClose();
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: classNames, style: style, ref: function ref(el) {
              return _this3.el = el;
            }, onClick: function onClick(e) {
              return e.stopPropagation();
            } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'ActionSheet__section' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'ActionSheet__list' },
              hasHeader && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'ActionSheet__header' },
                this.props.title && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'ActionSheet__title' },
                  this.props.title
                ),
                this.props.text && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'ActionSheet__text' },
                  this.props.text
                )
              ),
              hasHeader && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'ActionSheet__separator' }),
              children
            )
          ),
          osname === __WEBPACK_IMPORTED_MODULE_7__lib_platform__["c" /* IOS */] && this.props.cancel !== false && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'ActionSheet__section' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              ActionSheetItem,
              {
                onClick: this.onClose,
                style: { fontWeight: 600 }
              },
              this.props.cancel
            )
          )
        )
      );
    }
  }]);

  return ActionSheet;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

ActionSheet.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  text: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  cancel: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool]),
  onClose: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};
ActionSheet.defaultProps = {
  cancel: 'Отмена',
  onClose: function onClose() {}
};
/* harmony default export */ __webpack_exports__["a"] = (ActionSheet);


var ActionSheetItem = function (_React$Component2) {
  _inherits(ActionSheetItem, _React$Component2);

  function ActionSheetItem() {
    _classCallCheck(this, ActionSheetItem);

    return _possibleConstructorReturn(this, (ActionSheetItem.__proto__ || Object.getPrototypeOf(ActionSheetItem)).apply(this, arguments));
  }

  _createClass(ActionSheetItem, [{
    key: 'render',
    value: function render() {
      var classNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__lib_classnames__["a" /* default */])(itemClassNames, _defineProperty({}, 'ActionSheet-Item--' + this.props.theme, !this.props.disabled));
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2__Tappable_Tappable__["a" /* default */],
        {
          onClick: this.props.disabled ? null : this.props.onClick,
          disabled: this.props.disabled,
          className: classNames,
          style: this.props.style
        },
        this.props.children
      );
    }
  }]);

  return ActionSheetItem;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);
ActionSheetItem.propTypes = {
  theme: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['primary', 'danger']),
  disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};
ActionSheetItem.defaultProps = {
  theme: 'primary'
};

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Alert_css__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Alert_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Alert_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Tappable_Tappable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PopoutWrapper_PopoutWrapper__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_getClassName__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_classnames__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers_getClassName__["a" /* default */])('Alert');

var Alert = function (_Component) {
  _inherits(Alert, _Component);

  function Alert() {
    _classCallCheck(this, Alert);

    return _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).apply(this, arguments));
  }

  _createClass(Alert, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          actions = _props.actions,
          actionsLayout = _props.actionsLayout;

      var modifiers = {
        'Alert--v': actionsLayout === 'vertical',
        'Alert--h': actionsLayout === 'horizontal'
      };

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4__PopoutWrapper_PopoutWrapper__["a" /* default */],
        { v: 'center', h: 'center' },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_classnames__["a" /* default */])(baseClassNames, modifiers), style: style },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: 'Alert__content' },
            this.props.children
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'footer',
            { className: 'Alert__footer' },
            actions.map(function (button, i) {
              return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3__Tappable_Tappable__["a" /* default */],
                {
                  component: 'button',
                  className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_classnames__["a" /* default */])('Alert__btn', {
                    'Alert__btn--primary': button.modifier === 'primary'
                  }),
                  onClick: button.action,
                  key: 'alert-action-' + i
                },
                button.title
              );
            })
          )
        )
      );
    }
  }]);

  return Alert;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Alert.propTypes = {
  style: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,
  actionsLayout: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(['vertical', 'horizontal']),
  actions: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
    title: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
    action: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
    modifier: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(['primary'])
  }))
};
Alert.defaultProps = {
  style: {},
  children: '',
  actionsLayout: 'horizontal'
};
/* harmony default export */ __webpack_exports__["a"] = (Alert);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AlertInput_css__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AlertInput_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__AlertInput_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_platform__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_getClassName__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_removeObjectKeys__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__FormLayout_FormLayout__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Input_Input__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__IosAlertInput__ = __webpack_require__(55);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var osname = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_platform__["a" /* platform */])();
var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers_getClassName__["a" /* default */])('AlertInput');

var AlertInput = function (_Component) {
  _inherits(AlertInput, _Component);

  function AlertInput() {
    _classCallCheck(this, AlertInput);

    return _possibleConstructorReturn(this, (AlertInput.__proto__ || Object.getPrototypeOf(AlertInput)).apply(this, arguments));
  }

  _createClass(AlertInput, [{
    key: 'render',
    value: function render() {
      var className = this.props.className;


      if (osname === __WEBPACK_IMPORTED_MODULE_3__lib_platform__["b" /* ANDROID */]) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_classnames__["a" /* default */])(baseClassNames, className) },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7__FormLayout_FormLayout__["a" /* default */],
            null,
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Input_Input__["a" /* default */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_removeObjectKeys__["a" /* default */])(this.props, ['className']))
          )
        );
      }

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__IosAlertInput__["a" /* default */], _extends({
        className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_classnames__["a" /* default */])(baseClassNames, className)
      }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_removeObjectKeys__["a" /* default */])(this.props, ['className'])));
    }
  }]);

  return AlertInput;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

AlertInput.propTypes = {
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
};
/* harmony default export */ __webpack_exports__["a"] = (AlertInput);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AndroidClose_css__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AndroidClose_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__AndroidClose_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_getClassName__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__helpers_getClassName__["a" /* default */])('CloseButton');

var AndroidCloseButton = function (_Component) {
  _inherits(AndroidCloseButton, _Component);

  function AndroidCloseButton() {
    _classCallCheck(this, AndroidCloseButton);

    return _possibleConstructorReturn(this, (AndroidCloseButton.__proto__ || Object.getPrototypeOf(AndroidCloseButton)).apply(this, arguments));
  }

  _createClass(AndroidCloseButton, [{
    key: 'render',
    value: function render() {
      var width = 14;
      var height = 14;
      var props = {
        width: width,
        height: height,
        viewBox: '0 0 ' + width + ' ' + height,
        xmlns: 'http://www.w3.org/2000/svg',
        onClick: this.props.onClick,
        className: baseClassNames
      };

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'svg',
        props,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', { fill: '#fff', d: 'M14 1.4l-1.4-1.4-5.6 5.6-5.6-5.6-1.4 1.4 5.6 5.6-5.6 5.6 1.4 1.4 5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6z' })
      );
    }
  }]);

  return AndroidCloseButton;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (AndroidCloseButton);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BackButton_css__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BackButton_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__BackButton_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_getClassName__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_platform__ = __webpack_require__(5);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var osname = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_platform__["a" /* platform */])();
var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers_getClassName__["a" /* default */])('BackButton');

var BackButton = function (_Component) {
  _inherits(BackButton, _Component);

  function BackButton() {
    _classCallCheck(this, BackButton);

    return _possibleConstructorReturn(this, (BackButton.__proto__ || Object.getPrototypeOf(BackButton)).apply(this, arguments));
  }

  _createClass(BackButton, [{
    key: 'render',
    value: function render() {
      var isAndroid = osname === __WEBPACK_IMPORTED_MODULE_4__lib_platform__["b" /* ANDROID */];
      var width = isAndroid ? 16 : 13;
      var height = isAndroid ? 16 : 21;
      var svgProps = {
        width: width,
        height: height,
        viewBox: '0 0 ' + width + ' ' + height,
        xmlns: 'http://www.w3.org/2000/svg'
      };

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'button',
        _extends({}, this.props, { className: baseClassNames, style: { height: height, width: width } }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'svg',
          svgProps,
          isAndroid ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', { fill: 'currentColor', d: 'M16 9h-12.2l5.6 5.6-1.4 1.4-8-8 8-8 1.4 1.4-5.6 5.6h12.2z' }) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', { fill: 'currentColor', d: 'M0 10.5l10.5-10.5 2 2-8.5 8.5 8.5 8.5-2 2z' })
        )
      );
    }
  }]);

  return BackButton;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

BackButton.propTypes = {
  onClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (BackButton);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Checkbox_css__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Checkbox_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Checkbox_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_removeObjectKeys__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__["a" /* default */])('Checkbox');

var Checkbox = function (_Component) {
  _inherits(Checkbox, _Component);

  function Checkbox(props) {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props));

    _this.changeHandler = function (e) {
      _this.setState({ checked: e.target.checked });
      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    };

    _this.state = {
      checked: !!props.checked
    };
    return _this;
  }

  _createClass(Checkbox, [{
    key: 'render',
    value: function render() {
      var style = this.props.style;


      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'label',
        { className: baseClassNames, style: style },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_removeObjectKeys__["a" /* default */])(this.props, ['onChange']), {
          type: 'checkbox',
          className: 'Checkbox__self',
          checked: this.state.checked,
          onChange: this.changeHandler
        })),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('span', { className: 'Checkbox__pseudo' })
      );
    }
  }]);

  return Checkbox;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Checkbox.propTypes = {
  style: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
  checked: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  onChange: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func
};
Checkbox.defaultProps = {
  style: {},
  checked: false,
  onChange: function onChange() {}
};
/* harmony default export */ __webpack_exports__["a"] = (Checkbox);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ConfigProvider = function (_React$Component) {
  _inherits(ConfigProvider, _React$Component);

  function ConfigProvider() {
    _classCallCheck(this, ConfigProvider);

    return _possibleConstructorReturn(this, (ConfigProvider.__proto__ || Object.getPrototypeOf(ConfigProvider)).apply(this, arguments));
  }

  _createClass(ConfigProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        isWebView: this.props.isWebView || true,
        insets: this.props.insets || null
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return ConfigProvider;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

ConfigProvider.childContextTypes = {
  isWebView: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  insets: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    top: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
    right: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
    bottom: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
    left: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number
  })
};
/* harmony default export */ __webpack_exports__["a"] = (ConfigProvider);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Div;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Div_css__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Div_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Div_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_platform__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_getClassName__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_removeObjectKeys__ = __webpack_require__(4);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };









var osname = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_platform__["a" /* platform */])();
var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers_getClassName__["a" /* default */])('Div');

function Div(props) {
  var modifiers = {
    'Div--shadow': osname === __WEBPACK_IMPORTED_MODULE_3__lib_platform__["b" /* ANDROID */] && props.androidShadow,
    'Div--border': osname === __WEBPACK_IMPORTED_MODULE_3__lib_platform__["c" /* IOS */] && props.iosBorder
  };

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    _extends({
      className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_classnames__["a" /* default */])(baseClassNames, modifiers, props.className),
      style: props.style
    }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_removeObjectKeys__["a" /* default */])(props, ['className', 'style', 'iosBorder', 'androidShadow'])),
    props.children
  );
}

Div.propTypes = {
  style: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,
  androidShadow: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  iosBorder: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
};

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Entity_css__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Entity_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Entity_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__["a" /* default */])('Entity');

// @TODO Try to load photo

var Entity = function (_Component) {
  _inherits(Entity, _Component);

  function Entity() {
    _classCallCheck(this, Entity);

    return _possibleConstructorReturn(this, (Entity.__proto__ || Object.getPrototypeOf(Entity)).apply(this, arguments));
  }

  _createClass(Entity, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          size = _props.size,
          photo = _props.photo,
          title = _props.title,
          description = _props.description;

      var modifiers = {
        'Entity--small': size === 's',
        'Entity--no-photo': !photo
      };

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_classnames__["a" /* default */])(baseClassNames, modifiers, className),
          style: style
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: 'Entity__aside' },
          photo && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: photo, alt: title, className: 'Entity__photo' })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: 'Entity__main' },
          title && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: 'Entity__title' },
            title
          ),
          description && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: 'Entity__description' },
            description
          )
        )
      );
    }
  }]);

  return Entity;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Entity.propTypes = {
  style: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
  alignment: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(['left', 'center', 'right']),
  size: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(['s', 'm']),
  photo: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  title: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,
  description: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
};
Entity.defaultProps = {
  style: {},
  alignment: 'left',
  size: 's',
  photo: '',
  title: '',
  description: ''
};
/* harmony default export */ __webpack_exports__["a"] = (Entity);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__File_css__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__File_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__File_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_removeObjectKeys__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Button_Button__ = __webpack_require__(16);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__["a" /* default */])('File');

var File = function (_Component) {
  _inherits(File, _Component);

  function File(props) {
    _classCallCheck(this, File);

    var _this = _possibleConstructorReturn(this, (File.__proto__ || Object.getPrototypeOf(File)).call(this, props));

    _this.changeHandler = function (e) {
      _this.setState({ value: e.target.value });
      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    };

    _this.state = {
      value: null
    };
    return _this;
  }

  _createClass(File, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          label = _props.label,
          alignment = _props.alignment,
          appearance = _props.appearance;


      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5__Button_Button__["a" /* default */],
        {
          alignment: alignment,
          appearance: appearance,
          onClick: function onClick() {},
          className: baseClassNames,
          style: style,
          component: 'div'
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'label',
          { className: 'File__in' },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', _extends({
            className: 'File__self',
            type: 'file',
            onChange: this.changeHandler
          }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_removeObjectKeys__["a" /* default */])(this.props, ['onChange', 'style', 'label', 'alignment', 'appearance'])))
        ),
        label
      );
    }
  }]);

  return File;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

File.propTypes = {
  style: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
  label: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  alignment: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(['left', 'center', 'right']),
  appearance: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(['primary', 'default', 'danger']),
  onChange: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func
};
File.defaultProps = {
  style: {},
  label: 'Choose file',
  alignment: 'left',
  appearance: 'default',
  onChange: function onChange() {}
};
/* harmony default export */ __webpack_exports__["a"] = (File);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Flex;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Flex_css__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Flex_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Flex_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_removeObjectKeys__ = __webpack_require__(4);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__["a" /* default */])('Flex');

function Flex(props) {
  var items = [].concat(props.children).filter(function (a) {
    return !!a;
  });

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    _extends({
      className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_classnames__["a" /* default */])(baseClassNames, props.className),
      style: props.style
    }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__lib_removeObjectKeys__["a" /* default */])(props, ['className', 'style', 'alignment'])),
    items.map(function (item, i) {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: 'Flex__item', key: item.key || item.props.id || 'flex-item-' + i },
        item
      );
    })
  );
}

Flex.propTypes = {
  style: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
};

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Gallery_css__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Gallery_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Gallery_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_getClassName__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Touch_Touch__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_requestAnimationFrame__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_prefixer__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_prefixer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_prefixer__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers_getClassName__["a" /* default */])('Gallery');

var Gallery = function (_Component) {
  _inherits(Gallery, _Component);

  function Gallery(props) {
    _classCallCheck(this, Gallery);

    var _this = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this, props));

    _this.slidesStore = {};

    _this.go = function (targetIndex) {
      _this.setState({
        shiftX: _this.calculateIndent(targetIndex),
        current: targetIndex
      });

      if (_this.timeout) {
        _this.clearTimeout();
        _this.setTimeout(_this.props.autoplay);
      }
    };

    _this.next = function () {
      var _this$state = _this.state,
          slides = _this$state.slides,
          current = _this$state.current;

      var targetIndex = current < slides.length - 1 ? current + 1 : current;

      _this.go(targetIndex);
    };

    _this.prev = function () {
      var current = _this.state.current;

      var targetIndex = current > 0 ? current - 1 : current;

      _this.go(targetIndex);
    };

    _this.onStart = function (e) {
      _this.setState({
        animation: false,
        startT: e.startT
      });
    };

    _this.onMove = function (e) {
      if (!_this.isDraggable()) {
        return;
      }

      e.originalEvent.preventDefault();

      if (e.isSlideX) {
        _this.props.onDragStart && _this.props.onDragStart();
        if (_this.state.deltaX !== e.shiftX || _this.state.dragging !== e.isSlideX) {
          _this.setState({
            deltaX: e.shiftX,
            dragging: e.isSlideX
          });
        }

        return true;
      }
    };

    _this.onEnd = function (e) {
      var targetIndex = e.isSlide ? _this.getTarget() : _this.state.current;
      _this.props.onDragEnd && _this.props.onDragEnd();

      _this.setState({
        shiftX: _this.calculateIndent(targetIndex),
        deltaX: 0,
        animation: true,
        current: targetIndex,
        duration: '.24'
      });

      if (_this.timeout) {
        _this.clearTimeout();
        _this.setTimeout(_this.props.autoplay);
      }

      return true;
    };

    _this.onResize = function () {
      _this.initializeSlides();

      var layerWidth = _this.state.layerWidth;

      var newContainerWidth = _this.container.offsetWidth;

      _this.setState({
        shiftX: _this.calculateIndent(_this.state.current),
        containerWidth: newContainerWidth,
        min: -layerWidth + newContainerWidth,
        animation: false
      }, function () {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_requestAnimationFrame__["a" /* default */])(function () {
          return _this.setState({ animation: true });
        });
      });
    };

    _this.setTimeout = function (duration) {
      _this.timeout = setTimeout(function () {
        var _this$state2 = _this.state,
            slides = _this$state2.slides,
            current = _this$state2.current;

        var targetIndex = current < slides.length - 1 ? current + 1 : 0;

        _this.go(targetIndex);
      }, duration);
    };

    _this.clearTimeout = function () {
      clearTimeout(_this.timeout);
    };

    _this.reduceChildren = function (acc, item, i) {
      if (item) {
        var key = item.props.key || item.props.id || 'slide-' + i;
        var ref = _this.getSlideRef(i);

        acc.push(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: 'Gallery__slide', key: key, ref: ref },
          item
        ));
      }

      return acc;
    };

    _this.getContainerRef = function (container) {
      _this.container = container;
    };

    _this.getSlideRef = function (id) {
      return function (slide) {
        _this.slidesStore['slide-' + id] = slide;
      };
    };

    _this.state = {
      containerWidth: 0,
      current: props.initialSlideIndex,
      deltaX: 0,
      shiftX: 0,
      slides: [],
      animation: false,
      duration: 0.24
    };

    _this.slides = _this.getChildren(props.children);
    return _this;
  }

  _createClass(Gallery, [{
    key: 'initializeSlides',
    value: function initializeSlides() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

      var slides = this.getSlidesCoords();
      var containerWidth = this.container.offsetWidth;
      var layerWidth = slides.reduce(function (val, slide) {
        return slide.width + val;
      }, 0);
      var min = -layerWidth + containerWidth;
      var max = 0;

      this.setState({ min: min, max: max, layerWidth: layerWidth, containerWidth: containerWidth, slides: slides }, callback);
    }

    /**
     * Получает координаты и размеры каждого слайда
      * @returns {Array} Массив с объектами, описывающими габариты слайда
     */

  }, {
    key: 'getSlidesCoords',
    value: function getSlidesCoords() {
      var _this2 = this;

      return [].concat(this.props.children).reduce(function (acc, item, i) {
        if (item) {
          var elem = _this2.slidesStore['slide-' + i];
          var res = {
            coordX: elem.offsetLeft,
            width: elem.offsetWidth,
            id: item.props.id
          };

          acc.push(res);
        }

        return acc;
      }, []);
    }

    /**
     * Считает отступ слоя галереи во время драга
     *
     * @returns {Number} Значения отступа
     */

  }, {
    key: 'calculateDragIndent',
    value: function calculateDragIndent() {
      var _state = this.state,
          shiftX = _state.shiftX,
          deltaX = _state.deltaX,
          min = _state.min,
          max = _state.max;

      var indent = shiftX + deltaX;

      if (indent > max) {
        return max + Number((indent - max) / 3);
      } else if (indent < min) {
        return min + Number((indent - min) / 3);
      }

      return indent;
    }

    /**
     * Считает отступ слоя галереи
     *
     * @param {Number} targetIndex ID целевого слайда
     * @returns {Number} Значения отступа
     */

  }, {
    key: 'calculateIndent',
    value: function calculateIndent(targetIndex) {
      var slides = this.state.slides;


      if (!this.isDraggable()) {
        return 0;
      }

      var coordX = slides.length ? slides[targetIndex].coordX : 0;
      var targetIndent = this.validateIndent(-1 * coordX);

      return targetIndent;
    }
  }, {
    key: 'validateIndent',
    value: function validateIndent(value) {
      var _state2 = this.state,
          min = _state2.min,
          max = _state2.max;


      if (value < min) {
        return min;
      } else if (value > max) {
        return max;
      }

      return value;
    }
  }, {
    key: 'isDraggable',
    value: function isDraggable() {
      return this.state.layerWidth > this.state.containerWidth;
    }

    /**
     * Получает индекс слайда, к которому будет осуществлен переход
     *
     * @returns {Number} Индекс слайда
     */

  }, {
    key: 'getTarget',
    value: function getTarget() {
      var _state3 = this.state,
          slides = _state3.slides,
          current = _state3.current,
          deltaX = _state3.deltaX,
          shiftX = _state3.shiftX,
          startT = _state3.startT;

      var expectDeltaX = deltaX / (new Date() - startT) * 240 * 0.6;
      var shift = shiftX + deltaX + expectDeltaX;
      var direction = deltaX < 0 ? 1 : -1;

      // Находим ближайшую границу слайда к текущему отступу
      var targetIndex = slides.reduce(function (val, item, index) {
        var previousValue = Math.abs(slides[val].coordX + shift);
        var currentValue = Math.abs(item.coordX + shift);

        return previousValue < currentValue ? val : index;
      }, current);

      if (targetIndex === current) {
        var targetSlide = current + direction;

        if (targetSlide >= 0 && targetSlide < slides.length) {
          if (Math.abs(deltaX) > slides[targetSlide].width * 0.05) {
            targetIndex = targetSlide;
          }
        }
      }

      return targetIndex;
    }
  }, {
    key: 'getChildren',
    value: function getChildren(children) {
      return [].concat(children || this.props.children).reduce(this.reduceChildren, []);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      this.initializeSlides(function () {
        _this3.setState({
          shiftX: _this3.calculateIndent(_this3.props.initialSlideIndex)
        });
      });
      window.addEventListener('resize', this.onResize);

      if (this.props.autoplay) {
        this.setTimeout(this.props.autoplay);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.isChildrenDirty) {
        this.isChildrenDirty = false;
        this.initializeSlides();
      }
      if (prevState.current !== this.state.current && this.props.onChange) {
        this.props.onChange(this.state.current);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.slides = this.getChildren(nextProps.children);
      this.isChildrenDirty = true;

      if (nextProps.autoplay && !this.props.autoplay) {
        if (nextProps.autoplay) {
          this.setTimeout(nextProps.autoplay);
        }
      }
      if (!nextProps.autoplay && this.props.autoplay) {
        this.clearTimeout();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.onResize);

      this.clearTimeout();
    }
  }, {
    key: 'render',
    value: function render() {
      var _state4 = this.state,
          animation = _state4.animation,
          duration = _state4.duration,
          current = _state4.current,
          dragging = _state4.dragging;
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          slideWidth = _props.slideWidth;

      var indent = dragging ? this.calculateDragIndent() : this.calculateIndent(current);
      var classname = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__lib_classnames__["a" /* default */])(baseClassNames, className, {
        'Gallery--dragging': dragging
      });

      var layerStyle = __WEBPACK_IMPORTED_MODULE_7_react_prefixer___default()({
        transform: 'translateX(' + indent + 'px)',
        transition: animation ? 'transform ' + duration + 's cubic-bezier(.1, 0, .25, 1)' : 'none'
      });

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: classname, style: style, ref: this.getContainerRef },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__Touch_Touch__["a" /* default */],
          {
            useCapture: true,
            className: 'Gallery__viewport',
            onStartX: this.onStart,
            onMoveX: this.onMove,
            onEnd: this.onEnd,
            style: { width: slideWidth }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: 'Gallery__layer', style: layerStyle },
            this.slides
          )
        ),
        this.isDraggable() ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: 'Gallery__control' },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { className: 'Gallery__prev', onClick: this.prev }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { className: 'Gallery__next', onClick: this.next })
        ) : null
      );
    }
  }]);

  return Gallery;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Gallery.propTypes = {
  activePanel: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  prevPanel: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  nextPanel: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  style: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
  slideWidth: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number]),
  autoplay: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  initialSlideIndex: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  onDragStart: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onDragEnd: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func
};
Gallery.defaultProps = {
  slideWidth: '100%',
  children: '',
  autoplay: 0,
  initialSlideIndex: 0
};
/* harmony default export */ __webpack_exports__["a"] = (Gallery);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Group_css__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Group_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Group_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_getClassName__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers_getClassName__["a" /* default */])('Group');

var Group = function (_Component) {
  _inherits(Group, _Component);

  function Group() {
    _classCallCheck(this, Group);

    return _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).apply(this, arguments));
  }

  _createClass(Group, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          title = _props.title,
          description = _props.description;


      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: baseClassNames, style: style },
        title && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'h3',
          { className: 'Group__title' },
          title
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: 'Group__content' },
          this.props.children
        ),
        description && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: 'Group__description' },
          description
        )
      );
    }
  }]);

  return Group;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Group.propTypes = {
  style: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
  title: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,
  description: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};
Group.defaultProps = {
  style: {},
  title: '',
  description: '',
  children: ''
};
/* harmony default export */ __webpack_exports__["a"] = (Group);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Icon_css__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Icon_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Icon_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__["a" /* default */])('Icon');

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          children = _props.children;

      var classes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_classnames__["a" /* default */])(baseClassNames, {
        'Icon--verbose': !children
      });

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: classes, style: style },
        children
      );
    }
  }]);

  return Icon;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Icon.propTypes = {
  style: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};
Icon.defaultProps = {
  style: {},
  children: ''
};
/* harmony default export */ __webpack_exports__["a"] = (Icon);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__List_css__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__List_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__List_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__["a" /* default */])('List');

var List = function (_Component) {
  _inherits(List, _Component);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
  }

  _createClass(List, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          indented = _props.indented;

      var modifiers = {
        'List--indented': indented
      };

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'ul',
        { className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_classnames__["a" /* default */])(baseClassNames, modifiers), style: { style: style } },
        this.props.children
      );
    }
  }]);

  return List;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

List.propTypes = {
  style: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
  indented: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};
List.defaultProps = {
  style: {},
  indented: false,
  children: ''
};
/* harmony default export */ __webpack_exports__["a"] = (List);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ListItem_css__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ListItem_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ListItem_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_removeObjectKeys__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_getClassName__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Tappable_Tappable__ = __webpack_require__(7);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers_getClassName__["a" /* default */])('ListItem');

var ListItem = function (_Component) {
  _inherits(ListItem, _Component);

  function ListItem() {
    _classCallCheck(this, ListItem);

    return _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
  }

  _createClass(ListItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          icon = _props.icon,
          indicator = _props.indicator,
          asideContent = _props.asideContent,
          expandable = _props.expandable,
          indented = _props.indented,
          onClick = _props.onClick,
          children = _props.children;

      var modifiers = {
        'ListItem--expandable': expandable,
        'ListItem--indented': indented
      };
      var nativeProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_removeObjectKeys__["a" /* default */])(this.props, ['icon', 'indicator', 'asideContent', 'expandable', 'indented', 'onClick']);

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'li',
        _extends({ className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_classnames__["a" /* default */])(baseClassNames, modifiers) }, nativeProps),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6__Tappable_Tappable__["a" /* default */],
          { component: 'div', className: 'ListItem__in', onClick: onClick },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: 'ListItem__icon' },
            icon && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              { className: 'ListItem__icon-in' },
              icon
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: 'ListItem__main' },
            children
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: 'ListItem__indicator' },
            indicator
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: 'ListItem__aside' },
            asideContent
          )
        )
      );
    }
  }]);

  return ListItem;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

ListItem.propTypes = {
  icon: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.element]),
  indicator: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  asideContent: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.element]),
  expandable: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  indented: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,
  onClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func
};
ListItem.defaultProps = {
  icon: null,
  indicator: '',
  asideContent: '',
  expandable: false,
  indented: false,
  children: ''
};
/* harmony default export */ __webpack_exports__["a"] = (ListItem);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Radio;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Radio_css__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Radio_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Radio_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Tappable_Tappable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_removeObjectKeys__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_getClassName__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers_getClassName__["a" /* default */])('Radio');

function Radio(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3__Tappable_Tappable__["a" /* default */],
    { component: 'label', onClick: function onClick() {}, className: baseClassNames },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_removeObjectKeys__["a" /* default */])(props, ['children']), {
      type: 'radio',
      className: 'Radio__self'
    })),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'span',
      { className: 'Radio__label' },
      props.children
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('span', { className: 'Radio__icon' })
  );
}

Radio.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_getClassName__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Root_css__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Root_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Root_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var baseClassName = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers_getClassName__["a" /* default */])('Root');

var Root = function (_React$Component) {
  _inherits(Root, _React$Component);

  function Root(props) {
    _classCallCheck(this, Root);

    var _this = _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).call(this));

    _this.onAnimationEnd = function () {
      _this.setState({
        activeView: _this.state.nextView,
        prevView: null,
        nextView: null
      });
    };

    _this.state = {
      activeView: props.activeView,
      prevView: null,
      nextView: null
    };
    return _this;
  }

  _createClass(Root, [{
    key: 'findView',
    value: function findView(id) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.toArray(this.props.children).find(function (view) {
        return view.props.id === id;
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (nextProps.activeView !== this.props.activeView) {
        var firstLayerId = this.props.children.find(function (view) {
          return view.props.id === _this2.props.activeView || view.props.id === nextProps.activeView;
        }).props.id;

        var isBack = firstLayerId === nextProps.activeView;

        this.setState({
          activeView: null,
          nextView: nextProps.activeView,
          prevView: this.props.activeView,
          isBack: isBack
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.nextView !== prevState.nextView && this.state.nextView !== null) {
        (this.state.isBack ? this.prevView : this.nextView).addEventListener('animationend', this.onAnimationEnd);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var transitionState = this.state.nextView;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_classnames__["a" /* default */])(baseClassName, {
            'Root--transition': transitionState
          }) },
        this.state.prevView && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'Root__view ' + (this.state.isBack ? 'Root__view--hide-back' : 'Root__view--hide-forward'), ref: function ref(el) {
              return _this3.prevView = el;
            } },
          this.findView(this.state.prevView)
        ),
        this.state.nextView && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'Root__view ' + (this.state.isBack ? 'Root__view--show-back' : 'Root__view--show-forward'), ref: function ref(el) {
              return _this3.nextView = el;
            } },
          this.findView(this.state.nextView)
        ),
        this.state.activeView && this.findView(this.state.activeView)
      );
    }
  }]);

  return Root;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Root.propTypes = {
  activeView: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Root);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ScreenSpinner;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ScreenSpinner_css__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ScreenSpinner_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ScreenSpinner_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Spinner_Spinner__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_removeObjectKeys__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__PopoutWrapper_PopoutWrapper__ = __webpack_require__(11);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };











var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__["a" /* default */])('ScreenSpinner');

function ScreenSpinner(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_7__PopoutWrapper_PopoutWrapper__["a" /* default */],
    null,
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      _extends({
        className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__lib_classnames__["a" /* default */])(baseClassNames, props.className)
      }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_removeObjectKeys__["a" /* default */])(props, ['className'])),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Spinner_Spinner__["a" /* default */], { color: '#fff' })
    )
  );
}

ScreenSpinner.propTypes = {
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
};

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ScrollView_css__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ScrollView_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ScrollView_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_getClassName__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_removeObjectKeys__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_classnames__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers_getClassName__["a" /* default */])('ScrollView');

var ScrollView = function (_Component) {
  _inherits(ScrollView, _Component);

  function ScrollView(props) {
    _classCallCheck(this, ScrollView);

    var _this = _possibleConstructorReturn(this, (ScrollView.__proto__ || Object.getPrototypeOf(ScrollView)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(ScrollView, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(_ref) {
      var id = _ref.id,
          activePanel = _ref.activePanel,
          nextPanel = _ref.nextPanel;

      return id === activePanel || id === nextPanel;
    }
  }, {
    key: 'render',
    value: function render() {
      var className = this.props.className;


      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        _extends({
          className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__lib_classnames__["a" /* default */])(baseClassNames, className)
        }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_removeObjectKeys__["a" /* default */])(this.props, ['header', 'onPull', 'className', 'activePanel', 'prevPanel', 'nextPanel']), {
          ref: this.getRef
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: 'ScrollView__in' },
          this.props.children
        )
      );
    }
  }]);

  return ScrollView;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

ScrollView.propTypes = {
  activePanel: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  prevPanel: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  nextPanel: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
};
ScrollView.defaultProps = {
  children: ''
};
/* harmony default export */ __webpack_exports__["a"] = (ScrollView);

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Select_css__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Select_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Select_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_removeObjectKeys__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__["a" /* default */])('Select');

var Select = function (_Component) {
  _inherits(Select, _Component);

  function Select(props) {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

    _this.changeHandler = function (e) {
      _this.setState({ checked: e.target.value });
      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    };

    _this.state = {
      value: null
    };
    return _this;
  }

  _createClass(Select, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          label = _props.label,
          options = _props.options;


      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'label',
        { className: baseClassNames, style: style },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'select',
          _extends({
            className: 'Select__self',
            onChange: this.changeHandler
          }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_removeObjectKeys__["a" /* default */])(this.props, ['onChange', 'label', 'options'])),
          Array.isArray(options) && options.length && options.map(function (option, i) {
            var isString = typeof option === 'string';
            var value = isString ? option : option.value || option.text;
            var key = !isString && option.id;

            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'option',
              { value: value, key: key || 'option-' + i },
              isString ? option : option.text
            );
          }),
          this.props.children
        )
      );
    }
  }]);

  return Select;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Select.propTypes = {
  style: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
  label: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  options: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array,
  name: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  onChange: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.element, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.element)])
};
Select.defaultProps = {
  style: {},
  label: '',
  options: null,
  name: ''
};
/* harmony default export */ __webpack_exports__["a"] = (Select);

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Slider_css__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Slider_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Slider_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Touch_Touch__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_getClassName__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers_getClassName__["a" /* default */])('Slider');

var Slider = function (_Component) {
  _inherits(Slider, _Component);

  function Slider(props) {
    _classCallCheck(this, Slider);

    var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

    _this.onStart = function (e) {

      if (!_this.state.containerWidth) {
        _this.onResize();
      }

      if (!e.originalEvent.target.closest('.Slider__thumb')) {
        var coords = _this.calculate(e.startX - _this.state.containerLeft);

        _this.setState(Object.assign({}, coords, {
          startX: coords.absolutePosition,
          deltaX: 0
        }));
      } else {
        _this.setState({ active: true });
      }
    };

    _this.onMove = function (e) {
      _this.setState(_this.calculate(_this.state.startX + (e.shiftX || 0)));
      e.originalEvent.preventDefault();
    };

    _this.onEnd = function () {
      _this.setState({
        startX: _this.state.absolutePosition,
        deltaX: 0,
        active: false
      });
    };

    _this.onResize = function () {
      _this.setState({
        containerLeft: _this.container.offsetLeft,
        containerWidth: _this.container.offsetWidth
      });
    };

    _this.getRef = function (container) {
      _this.container = container;
      return;
    };

    _this.state = {
      startX: 0,
      deltaX: 0,
      value: null
    };
    return _this;
  }

  _createClass(Slider, [{
    key: 'calculate',
    value: function calculate(pos) {
      var _props = this.props,
          min = _props.min,
          max = _props.max,
          step = _props.step;
      var containerWidth = this.state.containerWidth;


      pos = Math.max(0, Math.min(pos, containerWidth));

      var relation = pos / containerWidth;
      var absolutePosition = pos;
      var position = Math.round(relation * 10000) / 100;

      if (step > 0) {
        var stepCount = Math.round((max - min) / step);

        return {
          position: Math.round(relation * stepCount) * step / (max - min) * 100,
          absolutePosition: absolutePosition,
          value: min + Math.round(relation * stepCount) * step
        };
      }

      return {
        position: position,
        absolutePosition: absolutePosition,
        value: min + (max - min) * relation
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.onResize);
      this.onResize();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.onResize);
    }
  }, {
    key: 'render',
    value: function render() {
      var modifiers = {
        'Slider--active': this.state.active
      };

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_classnames__["a" /* default */])(baseClassNames, modifiers), ref: this.getRef },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3__Touch_Touch__["a" /* default */],
          { onStart: this.onStart, onMove: this.onMove, onEnd: this.onEnd, className: 'Slider__in' },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: 'Slider__dragger', style: { width: this.state.position + '%' } },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('span', { className: 'Slider__thumb' })
          )
        )
      );
    }
  }]);

  return Slider;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Slider.propTypes = {
  min: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  max: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  value: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  step: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number
};
Slider.defaultProps = {
  min: 0,
  max: 100,
  value: 0,
  step: 0
};
/* harmony default export */ __webpack_exports__["a"] = (Slider);

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Text_css__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Text_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Text_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__["a" /* default */])('Text');

var Text = function (_Component) {
  _inherits(Text, _Component);

  function Text() {
    _classCallCheck(this, Text);

    return _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).apply(this, arguments));
  }

  _createClass(Text, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          alignment = _props.alignment,
          className = _props.className,
          style = _props.style;

      var modifiers = {
        'Text--left': alignment === 'left',
        'Text--center': alignment === 'center',
        'Text--right': alignment === 'right'
      };

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_classnames__["a" /* default */])(baseClassNames, modifiers, className),
          style: style
        },
        this.props.children
      );
    }
  }]);

  return Text;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Text.propTypes = {
  style: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  alignment: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(['left', 'center', 'right']),
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};
Text.defaultProps = {
  style: {},
  alignment: 'left'
};
/* harmony default export */ __webpack_exports__["a"] = (Text);

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Textarea_css__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Textarea_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Textarea_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_removeObjectKeys__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_requestAnimationFrame__ = __webpack_require__(6);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__["a" /* default */])('Textarea');

var Textarea = function (_Component) {
  _inherits(Textarea, _Component);

  function Textarea(props) {
    _classCallCheck(this, Textarea);

    var _this = _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).call(this, props));

    _this.getRef = function (element) {
      _this.element = element;
    };

    _this.resize = function () {
      var el = _this.element;

      if (el) {
        var offsetHeight = el.offsetHeight,
            scrollHeight = el.scrollHeight;

        var style = window.getComputedStyle(el);
        var paddingTop = parseInt(style.paddingTop);
        var paddingBottom = parseInt(style.paddingBottom);

        var diff = paddingTop + paddingBottom;

        if (scrollHeight + diff <= offsetHeight) {
          diff = 0;
        }

        if (el.value) {
          _this.setState({ height: scrollHeight - diff });
        }

        var top = document.body.scrollTop;

        _this.setState({ height: 0 }, function () {
          var height = el.scrollHeight - diff;

          _this.setState({ height: height });
          //TODO fix problem with scroll to top
          // document.body.scrollTop = top;

          _this.props.onResize(el);
        });
      }
    };

    _this.onChange = function (e) {
      if (_this.props.grow) {
        _this.resize();
      }

      if (!_this.isControlledOutside) {
        _this.setState({ value: e.target.value });
      }

      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    };

    _this.state = {
      value: typeof props.value === 'undefined' ? props.initialValue || '' : undefined
    };

    if (typeof props.value !== 'undefined') {
      _this.isControlledOutside = true;
    }
    return _this;
  }

  _createClass(Textarea, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.grow) {
        this.resize();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (prevProps.value && this.props.value === '') {
        // Fix iOS extra indent on removing content
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__lib_requestAnimationFrame__["a" /* default */])(function () {
          _this2.element.value = '';
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      var value = this.isControlledOutside ? props.value : this.state.value;
      var height = this.state.height || this.props.style.height || 66;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('textarea', _extends({
        className: baseClassNames
      }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_removeObjectKeys__["a" /* default */])(props, ['initialValue', 'grow', 'style', 'onResize']), {
        value: value,
        onChange: this.onChange,
        ref: this.getRef,
        style: Object.assign({}, props.style, { height: height })
      }));
    }
  }]);

  return Textarea;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Textarea.propTypes = {
  style: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
  value: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  initialValue: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  grow: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  onChange: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onResize: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func
};
Textarea.defaultProps = {
  style: {},
  initialValue: '',
  grow: true,
  onResize: function onResize() {}
};
/* harmony default export */ __webpack_exports__["a"] = (Textarea);

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__View_css__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__View_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__View_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_animate__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_transitionEvents__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_getClassName__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_platform__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Touch_Touch__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lib_requestAnimationFrame__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_prefixer__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_prefixer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_prefixer__);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var osname = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__lib_platform__["a" /* platform */])();
var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__helpers_getClassName__["a" /* default */])('View');

var View = function (_Component) {
  _inherits(View, _Component);

  function View(props) {
    _classCallCheck(this, View);

    var _this = _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).call(this, props));

    _this.refsStore = {};

    _this.transitionEndHandler = function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { manual: true };

      if (e.propertyName === 'visibility' || e.manual) {
        var activePanel = _this.props.activePanel;
        var isBack = _this.state.isBack;
        _this.setState({
          prevPanel: null,
          nextPanel: null,
          visiblePanels: [activePanel],
          activePanel: activePanel,
          animated: false,
          isBack: undefined
        }, function () {
          // document.body.classList.remove('locked');

          // reset scrollTop for all panels
          var panels = document.querySelectorAll('.View__panel');

          Array.prototype.forEach.call(panels, function (panel) {
            if (!panel.classList.contains('View__panel--active')) {
              panel.scrollTop = 0;
            }
          });

          // Restore scroll on window if next panel placed before previous panel
          if (activePanel && isBack) {
            window.scrollTo(0, this.state.scrolls[activePanel] || 0);
          }

          if (this.props.onTransition) {
            this.props.onTransition();
          }
        });
      }
    };

    _this.swipingBackTransitionEndHandler = function (e) {
      // indexOf because of vendor prefixes in old browsers
      if (e.propertyName.indexOf('transform') >= 0 && e.target.classList.contains('View__panel--swipe-back-next')) {
        if (_this.state.swipingBackFinish === true) {
          _this.props.onSwipeBack && _this.props.onSwipeBack();
        } else {
          _this.setState({
            swipeBackPrevPanel: null,
            swipeBackNextPanel: null,
            swipingBack: false,
            swipingBackFinish: null,
            swipebackStartX: 0,
            swipeBackShift: 0
          });
        }
      }
    };

    _this.onScrollTop = function () {
      var activePanel = _this.state.activePanel;


      if (activePanel) {
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

        if (scrollTop) {
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_animate__["a" /* default */])({
            duration: 200,
            timing: function timing(n) {
              return Math.sqrt(n);
            },
            draw: function draw(val) {
              window.scrollTo(0, scrollTop - val * scrollTop);
            }
          });
        }
      }
    };

    _this.onMove = function (e) {
      if (osname === __WEBPACK_IMPORTED_MODULE_7__lib_platform__["c" /* IOS */] && _this.props.onSwipeBack) {
        if (_this.state.animated && e.startX <= 70) {
          _this.transitionEndHandler();
        }

        if (e.startX <= 70 && !_this.state.swipingBack && _this.props.history.length > 1) {
          _this.setState({
            swipingBack: true,
            swipebackStartX: e.startX,
            startT: e.startT,
            swipeBackPrevPanel: _this.state.activePanel,
            swipeBackNextPanel: _this.props.history.slice(-2)[0],
            scrolls: Object.assign({}, _this.state.scrolls, _defineProperty({}, _this.state.activePanel, window.pageYOffset))
          }, function () {
            _this.props.onSwipeBackStart && _this.props.onSwipeBackStart();
          });
        }
        if (_this.state.swipingBack) {
          var swipeBackShift = void 0;
          if (e.shiftX < 0) {
            swipeBackShift = 0;
          } else if (e.shiftX > window.innerWidth - _this.state.swipebackStartX) {
            swipeBackShift = window.innerWidth;
          } else {
            swipeBackShift = e.shiftX;
          }
          _this.setState({ swipeBackShift: swipeBackShift });
        }
      }
      e.originalEvent.preventDefault();
    };

    _this.onEnd = function () {
      if (_this.state.swipingBack) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__lib_requestAnimationFrame__["a" /* default */])(function () {
          var speed = _this.state.swipeBackShift / (new Date() - _this.state.startT) * 1000;
          _this.setState({ swipingBackFinish: speed > 250 || _this.state.swipebackStartX + _this.state.swipeBackShift > window.innerWidth / 2 });
        });
      }
    };

    _this.getRef = function (c) {
      if (c && c.container && c.props.id) {
        var el = c;

        while (el.container) {
          el = el.container;
        }

        _this.refsStore[c.props.id] = el;
      }
    };

    _this.state = {
      visiblePanels: [props.activePanel],
      children: [props.children],
      activePanel: props.activePanel,
      scrolls: {},
      swipingBack: false,
      swipebackStartX: 0,
      swipeBackShift: 0,
      swipeBackNextPanel: null,
      swipeBackPrevPanel: null,
      swipingBackFinish: null
    };
    return _this;
  }

  _createClass(View, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var _state = this.state,
          activePanel = _state.activePanel,
          nextPanel = _state.nextPanel;


      var scrolls = void 0,
          pageYOffset = void 0;

      // Popout appearance
      if (!!nextProps.popout && !this.props.popout) {
        pageYOffset = window.pageYOffset;

        this.blurActiveElement();
        scrolls = Object.assign({}, this.state.scrolls, _defineProperty({}, activePanel, pageYOffset));

        this.setState({ scrolls: scrolls }, function () {
          this.pickPanel(activePanel).scrollTop = scrolls[activePanel];
        });
      }

      // Panel transition
      if (this.props.activePanel !== nextProps.activePanel && !this.state.swipingBack) {
        pageYOffset = pageYOffset || window.pageYOffset;

        var firstLayerId = this.props.children.find(function (panel) {
          return panel.props.id === activePanel || panel.props.id === nextProps.activePanel;
        }).props.id;
        var isBack = firstLayerId === nextProps.activePanel;

        scrolls = scrolls || Object.assign({}, this.state.scrolls, _defineProperty({}, activePanel, pageYOffset));

        // Blur inputs on panel transition
        this.blurActiveElement();
        // @TODO Lock overscroll on window
        var visiblePanels = void 0;
        if (this.state.animated) {
          this.transitionEndHandler();
          visiblePanels = [nextPanel, nextProps.activePanel];
        } else {
          visiblePanels = [activePanel, nextProps.activePanel];
        }
        this.setState({
          visiblePanels: visiblePanels,
          animated: false,
          scrolls: scrolls,
          isBack: isBack
        }, function () {
          // document.body.classList.add('locked');

          // Delegate scrollTop from window
          var prevPanelElement = activePanel && this.pickPanel(activePanel);
          var nextPanelElement = nextProps.activePanel && this.pickPanel(nextProps.activePanel);

          if (prevPanelElement) {
            prevPanelElement.scrollTop = scrolls[activePanel] || 0;
          }

          if (isBack && nextPanelElement) {
            nextPanelElement.scrollTop = scrolls[nextProps.activePanel] || 0;
          }
        });
      }
      // Если панель сменилась из-за свайпа назад в iOS
      if (this.props.activePanel !== nextProps.activePanel && this.state.swipingBack) {
        this.setState({
          swipeBackPrevPanel: null,
          swipeBackNextPanel: null,
          swipingBack: false,
          swipingBackFinish: null,
          swipebackStartX: 0,
          swipeBackShift: 0,
          activePanel: nextProps.activePanel,
          visiblePanels: [nextProps.activePanel]
        }, function () {
          return _this2.props.onTransition && _this2.props.onTransition();
        });
      }
    }
  }, {
    key: 'transitionRequired',
    value: function transitionRequired(prevState) {
      return this.state.visiblePanels.length === 2 && this.state.visiblePanels[1] !== prevState.visiblePanels[1] && !this.state.animated;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _this3 = this;

      var scrolls = this.state.scrolls;

      if (this.transitionRequired(prevState)) {
        var _state$visiblePanels = _slicedToArray(this.state.visiblePanels, 2),
            prevPanel = _state$visiblePanels[0],
            nextPanel = _state$visiblePanels[1];

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__lib_requestAnimationFrame__["a" /* default */])(function () {
          _this3.setState({
            prevPanel: prevPanel,
            nextPanel: nextPanel,
            activePanel: null,
            animated: true
          }, function () {
            _this3.waitTransitionFinish(_this3.pickPanel(nextPanel), _this3.transitionEndHandler);
          });
        });
      }

      if (prevState.swipeBackNextPanel === null && this.state.swipeBackNextPanel) {
        var nextPanelElement = this.pickPanel(this.state.swipeBackNextPanel);
        var prevPanelElement = this.pickPanel(this.state.swipeBackPrevPanel);

        nextPanelElement.scrollTop = scrolls[this.state.swipeBackNextPanel];
        prevPanelElement.scrollTop = scrolls[this.state.swipeBackPrevPanel];
      }

      if (prevState.swipingBackFinish === null && this.state.swipingBackFinish !== null) {
        this.waitTransitionFinish(this.pickPanel(this.state.swipeBackNextPanel), this.swipingBackTransitionEndHandler);
      }

      if (prevState.swipingBackFinish === false && this.state.swipingBackFinish === null) {
        window.scrollTo(0, scrolls[this.state.activePanel]);
      }

      // Popout disappearance: restore scroll
      if (prevProps.popout && !this.props.popout && scrolls[this.state.activePanel]) {
        window.scrollTo(0, scrolls[this.state.activePanel]);
      }
    }
  }, {
    key: 'waitTransitionFinish',
    value: function waitTransitionFinish(elem, eventHandler) {
      if (__WEBPACK_IMPORTED_MODULE_5__lib_transitionEvents__["a" /* default */].supported) {
        var eventName = __WEBPACK_IMPORTED_MODULE_5__lib_transitionEvents__["a" /* default */].prefix ? __WEBPACK_IMPORTED_MODULE_5__lib_transitionEvents__["a" /* default */].prefix + 'TransitionEnd' : 'transitionend';

        elem.removeEventListener(eventName, eventHandler);
        elem.addEventListener(eventName, eventHandler);
      } else {
        setTimeout(eventHandler.bind(this), osname === __WEBPACK_IMPORTED_MODULE_7__lib_platform__["b" /* ANDROID */] ? 300 : 600);
      }
    }
  }, {
    key: 'blurActiveElement',
    value: function blurActiveElement() {
      if (typeof window !== 'undefined' && document.activeElement) {
        document.activeElement.blur();
      }
    }
  }, {
    key: 'pickPanel',
    value: function pickPanel(id) {
      var elem = document.querySelector('#' + id);

      if (!elem) {
        console.warn('Element #' + id + ' not found');
      }

      return elem && elem.parentNode.parentNode;
    }
  }, {
    key: 'calcPanelSwipeStyles',
    value: function calcPanelSwipeStyles(panelId) {
      var isPrev = panelId === this.state.swipeBackPrevPanel;
      var isNext = panelId === this.state.swipeBackNextPanel;

      var prevPanelTranslate = this.state.swipeBackShift + 'px';
      var nextPanelTranslate = -50 + this.state.swipeBackShift * 100 / window.innerWidth / 2 + '%';
      var prevPanelShadow = 0.3 * (window.innerWidth - this.state.swipeBackShift) / window.innerWidth;

      if (this.state.swipingBackFinish !== null) {
        return isPrev ? __WEBPACK_IMPORTED_MODULE_10_react_prefixer___default()({ boxShadow: '-2px 0 12px rgba(0, 0, 0, ' + prevPanelShadow + ')' }) : {};
      }

      if (isNext) {
        return __WEBPACK_IMPORTED_MODULE_10_react_prefixer___default()({
          transform: 'translate3d(' + nextPanelTranslate + ', 0, 0)'
        });
      }
      if (isPrev) {
        return __WEBPACK_IMPORTED_MODULE_10_react_prefixer___default()({
          transform: 'translate3d(' + prevPanelTranslate + ', 0, 0)',
          boxShadow: '-2px 0 12px rgba(0, 0, 0, ' + prevPanelShadow + ')'
        });
      }

      return {};
    }
  }, {
    key: 'calcHeaderSwipeStyles',
    value: function calcHeaderSwipeStyles(panelId) {
      var isPrev = panelId === this.state.swipeBackPrevPanel;
      var isNext = panelId === this.state.swipeBackNextPanel;

      if (!isPrev && !isNext || this.state.swipingBackFinish !== null) {
        return {
          title: {},
          item: {},
          leftIn: {},
          leftIcon: {},
          right: {}
        };
      }

      var opacity = this.state.swipeBackShift / window.innerWidth;
      var titleTransform = this.state.swipeBackShift / window.innerWidth * 30;
      var leftTransform = this.state.swipeBackShift / window.innerWidth * 60;

      if (isNext) {
        return __WEBPACK_IMPORTED_MODULE_10_react_prefixer___default()({
          title: { transform: 'translate3d(' + (-30 + titleTransform) + '%, 0, 0)', opacity: opacity },
          item: { opacity: opacity },
          leftIn: { transform: 'translate3d(' + (-60 + leftTransform) + '%, 0, 0)', opacity: opacity },
          leftIcon: { opacity: 1 },
          right: { opacity: 1 }
        });
      }
      if (isPrev) {
        return __WEBPACK_IMPORTED_MODULE_10_react_prefixer___default()({
          title: { transform: 'translate3d(' + titleTransform + '%, 0, 0)' },
          item: { opacity: 1 - opacity },
          leftIn: { transform: 'translate3d(' + leftTransform + '%, 0, 0)' }
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          style = _props.style,
          popout = _props.popout,
          header = _props.header;
      var _state2 = this.state,
          prevPanel = _state2.prevPanel,
          nextPanel = _state2.nextPanel,
          activePanel = _state2.activePanel;

      var hasPopout = !!popout;
      var hasHeader = header !== null;
      var panels = [].concat(this.props.children).filter(function (panel) {
        return _this4.state.visiblePanels.indexOf(panel.props.id) > -1 || panel.props.id === _this4.state.swipeBackPrevPanel || panel.props.id === _this4.state.swipeBackNextPanel;
      });
      var modifiers = {
        'View--header': hasHeader,
        'View--popout': hasPopout,
        'View--animated': this.state.visiblePanels.length === 2,
        'View--swiping-back': this.state.swipingBack
      };

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_8__Touch_Touch__["a" /* default */],
        {
          component: 'section',
          className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_classnames__["a" /* default */])(baseClassNames, modifiers),
          style: style,
          onMoveX: this.onMove,
          onEnd: this.onEnd
        },
        hasHeader && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: 'View__header' },
          osname === __WEBPACK_IMPORTED_MODULE_7__lib_platform__["c" /* IOS */] && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { className: 'View__header-scrolltop', onClick: this.onScrollTop }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: 'View__header-in' },
            panels.map(function (panel, i) {
              return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_classnames__["a" /* default */])('View__header-item', {
                    'View__header-item--active': panel.props.id === activePanel,
                    'View__header-item--prev': panel.props.id === prevPanel,
                    'View__header-item--next': panel.props.id === nextPanel,
                    'View__header-item--swipe-back-prev': panel.props.id === _this4.state.swipeBackPrevPanel,
                    'View__header-item--swipe-back-next': panel.props.id === _this4.state.swipeBackNextPanel,
                    'View__header-item--swipe-back-success': _this4.state.swipingBackFinish === true,
                    'View__header-item--swipe-back-failed': _this4.state.swipingBackFinish === false
                  }),
                  style: _this4.calcHeaderSwipeStyles(panel.props.id).item,
                  key: panel.key || panel.props.id || 'panel-header-' + i
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'div',
                  { className: 'View__header-left' },
                  panel.props.header.icon && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                      className: 'View__header-icon',
                      style: _this4.calcHeaderSwipeStyles(panel.props.id).leftIcon
                    },
                    panel.props.header.icon
                  ),
                  panel.props.header.left && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                      className: 'View__header-left-in',
                      style: _this4.calcHeaderSwipeStyles(panel.props.id).leftIn
                    },
                    panel.props.header.left
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'div',
                  {
                    className: 'View__header-title',
                    style: _this4.calcHeaderSwipeStyles(panel.props.id).title
                  },
                  panel.props.header.title
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'div',
                  {
                    className: 'View__header-right',
                    style: _this4.calcHeaderSwipeStyles(panel.props.id).right
                  },
                  panel.props.header.right
                )
              );
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: 'View__panels' },
          panels.map(function (panel, i) {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_classnames__["a" /* default */])('View__panel', {
                  'View__panel--active': panel.props.id === activePanel,
                  'View__panel--prev': panel.props.id === prevPanel,
                  'View__panel--next': panel.props.id === nextPanel,
                  'View__panel--swipe-back-prev': panel.props.id === _this4.state.swipeBackPrevPanel,
                  'View__panel--swipe-back-next': panel.props.id === _this4.state.swipeBackNextPanel,
                  'View__panel--swipe-back-success': _this4.state.swipingBackFinish === true,
                  'View__panel--swipe-back-failed': _this4.state.swipingBackFinish === false
                }),
                style: _this4.calcPanelSwipeStyles(panel.props.id),
                key: panel.key || panel.props.id || 'panel-' + i
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { className: 'View__panel-in' },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.cloneElement(panel, { ref: _this4.getRef, activePanel: activePanel, nextPanel: nextPanel })
              )
            );
          })
        ),
        hasPopout && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: 'View__popout' },
          popout
        )
      );
    }
  }]);

  return View;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

View.propTypes = {
  style: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
  activePanel: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
  header: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,
  popout: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,
  onTransition: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onSwipeBack: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onSwipeBackStart: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  history: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string)
};
View.defaultProps = {
  style: {},
  children: null,
  popout: undefined,
  header: null,
  history: []
};
View.contextTypes = {
  insets: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
    top: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
    right: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
    bottom: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
    left: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number
  })
};
/* harmony default export */ __webpack_exports__["a"] = (View);

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = wrapTextNode;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function wrapTextNode(node, props) {
  var TagName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'div';

  if (!node) {
    return null;
  }

  if (typeof node === 'string') {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      TagName,
      props,
      node
    );
  }

  return node;
}

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_removeObjectKeys__ = __webpack_require__(4);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var IosAlertInput = function (_Component) {
  _inherits(IosAlertInput, _Component);

  function IosAlertInput(props) {
    _classCallCheck(this, IosAlertInput);

    var _this = _possibleConstructorReturn(this, (IosAlertInput.__proto__ || Object.getPrototypeOf(IosAlertInput)).call(this, props));

    _this.onChange = function (e) {
      _this.setState({ value: e.target.value });
      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    };

    _this.state = {
      value: props.initialValue || ''
    };
    return _this;
  }

  _createClass(IosAlertInput, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: this.props.className },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', _extends({
          className: 'AlertInput__self'
        }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_removeObjectKeys__["a" /* default */])(this.props, ['className', 'initialValue', 'onChange']), {
          value: this.state.value,
          onChange: this.onChange
        }))
      );
    }
  }]);

  return IosAlertInput;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

IosAlertInput.propTypes = {
  type: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['text', 'password', 'date', 'datetime-local', 'time', 'month', 'email', 'number', 'tel', 'url']),
  initialValue: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  onChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  style: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
IosAlertInput.defaultProps = {
  type: 'text',
  initialValue: ''
};
/* harmony default export */ __webpack_exports__["a"] = (IosAlertInput);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_keyframes__ = __webpack_require__(20);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var AndroidSpinner = function (_Component) {
  _inherits(AndroidSpinner, _Component);

  function AndroidSpinner(props) {
    _classCallCheck(this, AndroidSpinner);

    var _this = _possibleConstructorReturn(this, (AndroidSpinner.__proto__ || Object.getPrototypeOf(AndroidSpinner)).call(this, props));

    var id = Math.round(Math.random() * 1e6).toString(16);
    var offset = Math.round(Math.PI * props.size);
    var c = 0.5 * props.size;

    _this.state = {
      c: c,
      id: id,
      offset: offset,
      animation: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_keyframes__["a" /* default */])('dash' + id, {
        '0%': {
          'stroke-dashoffset': offset
        },
        '50%': {
          'stroke-dashoffset': Math.round(0.25 * offset),
          'transform': 'rotate(135deg)'
        },
        '100%': {
          'stroke-dashoffset': offset,
          'transform': 'rotate(360deg)'
        }
      })
    };
    return _this;
  }

  _createClass(AndroidSpinner, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          color = _props.color,
          size = _props.size,
          on = _props.on,
          progress = _props.progress,
          duration = _props.duration,
          strokeWidth = _props.strokeWidth;
      var _state = this.state,
          id = _state.id,
          offset = _state.offset,
          animation = _state.animation;


      var dashoffset = offset;
      var transform = '';

      if (!on) {
        dashoffset = Math.abs(0.02 * (progress - 50) * 0.75 * offset) + 0.25 * offset;

        if (progress <= 50) {
          transform = 'rotate(' + Math.round(progress * 135 / 50) + 'deg)';
        } else {
          transform = 'rotate(' + (135 + Math.round((progress - 50) * 360 / 50)) + 'deg)';
        }
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'g',
        {
          style: {
            width: size,
            height: size,
            transformOrigin: 0.5 * size + 'px ' + 0.5 * size + 'px',
            transform: transform
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('style', { dangerouslySetInnerHTML: { __html: animation } }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('circle', {
          className: 'Spinner__path',
          fill: 'none',
          stroke: color,
          strokeDasharray: offset,
          strokeDashoffset: dashoffset,
          strokeWidth: strokeWidth,
          style: {
            animationName: on ? 'dash' + id : 'none',
            animationTimingFunction: 'ease-in-out',
            animationDuration: duration + 's',
            animationIterationCount: 'infinite'
          },
          cx: 0.5 * size,
          cy: 0.5 * size,
          r: 0.5 * size - 0.5 * strokeWidth
        })
      );
    }
  }]);

  return AndroidSpinner;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

AndroidSpinner.propTypes = {
  color: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  size: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  strokeWidth: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  duration: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  on: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  progress: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number
};
AndroidSpinner.defaultProps = {
  color: '#5181b8',
  size: 38,
  strokeWidth: 4,
  duration: 1.4,
  on: true,
  progress: null
};
/* harmony default export */ __webpack_exports__["a"] = (AndroidSpinner);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var IOS_PART_HEIGHT = 0.275;

var IosSpinner = function (_Component) {
  _inherits(IosSpinner, _Component);

  function IosSpinner(props) {
    _classCallCheck(this, IosSpinner);

    var _this = _possibleConstructorReturn(this, (IosSpinner.__proto__ || Object.getPrototypeOf(IosSpinner)).call(this, props));

    var c = 0.5 * props.size;
    var r = Math.max(Math.floor(props.size * 0.075), 2);
    var ty = Math.ceil(-0.5 * (1 - IOS_PART_HEIGHT) * props.size);

    var iosStyles = [];

    for (var i = 0; i < 12; i++) {
      iosStyles.push({
        transform: 'rotate(' + i * 30 + ', ' + c + ', ' + c + ') translate(0 ' + ty + ')',
        rx: r,
        ry: r,
        style: {
          fill: props.color,
          animationDelay: Math.round(props.duration / 12 * 100 * (-11 + i)) / 100 + 's'
        }
      });
    }

    _this.state = { iosStyles: iosStyles };
    return _this;
  }

  _createClass(IosSpinner, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          on = _props.on,
          progress = _props.progress;
      var iosStyles = this.state.iosStyles;


      var parts = iosStyles;

      if (!on) {
        parts = iosStyles.slice(0, Math.round(progress / (100 / 12)));
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'g',
        null,
        parts.map(function (item, i) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('rect', _extends({ className: 'Spinner__part' }, item, { key: 'spinner-part-' + i }));
        })
      );
    }
  }]);

  return IosSpinner;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

IosSpinner.propTypes = {
  color: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  size: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  duration: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  on: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  progress: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number
};
IosSpinner.defaultProps = {
  color: '#262626',
  size: 20,
  duration: 1.4,
  on: true,
  progress: null
};
/* harmony default export */ __webpack_exports__["a"] = (IosSpinner);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return v; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Root_Root__ = __webpack_require__(46);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Root", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Root_Root__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_View_View__ = __webpack_require__(53);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return __WEBPACK_IMPORTED_MODULE_1__components_View_View__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ScrollView_ScrollView__ = __webpack_require__(48);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollView", function() { return __WEBPACK_IMPORTED_MODULE_2__components_ScrollView_ScrollView__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Group_Group__ = __webpack_require__(41);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return __WEBPACK_IMPORTED_MODULE_3__components_Group_Group__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Entity_Entity__ = __webpack_require__(37);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Entity", function() { return __WEBPACK_IMPORTED_MODULE_4__components_Entity_Entity__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_List_List__ = __webpack_require__(43);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return __WEBPACK_IMPORTED_MODULE_5__components_List_List__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_ListItem_ListItem__ = __webpack_require__(44);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return __WEBPACK_IMPORTED_MODULE_6__components_ListItem_ListItem__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_FormLayout_FormLayout__ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FormLayout", function() { return __WEBPACK_IMPORTED_MODULE_7__components_FormLayout_FormLayout__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Icon_Icon__ = __webpack_require__(42);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return __WEBPACK_IMPORTED_MODULE_8__components_Icon_Icon__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Text_Text__ = __webpack_require__(51);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return __WEBPACK_IMPORTED_MODULE_9__components_Text_Text__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Div_Div__ = __webpack_require__(36);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Div", function() { return __WEBPACK_IMPORTED_MODULE_10__components_Div_Div__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Flex_Flex__ = __webpack_require__(39);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Flex", function() { return __WEBPACK_IMPORTED_MODULE_11__components_Flex_Flex__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_BackButton_BackButton__ = __webpack_require__(33);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BackButton", function() { return __WEBPACK_IMPORTED_MODULE_12__components_BackButton_BackButton__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_Button_Button__ = __webpack_require__(16);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return __WEBPACK_IMPORTED_MODULE_13__components_Button_Button__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_Checkbox_Checkbox__ = __webpack_require__(34);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return __WEBPACK_IMPORTED_MODULE_14__components_Checkbox_Checkbox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_File_File__ = __webpack_require__(38);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "File", function() { return __WEBPACK_IMPORTED_MODULE_15__components_File_File__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_Input_Input__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return __WEBPACK_IMPORTED_MODULE_16__components_Input_Input__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_Textarea_Textarea__ = __webpack_require__(52);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return __WEBPACK_IMPORTED_MODULE_17__components_Textarea_Textarea__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_Radio_Radio__ = __webpack_require__(45);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return __WEBPACK_IMPORTED_MODULE_18__components_Radio_Radio__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_Select_Select__ = __webpack_require__(49);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return __WEBPACK_IMPORTED_MODULE_19__components_Select_Select__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_Slider_Slider__ = __webpack_require__(50);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return __WEBPACK_IMPORTED_MODULE_20__components_Slider_Slider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_Tappable_Tappable__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Tappable", function() { return __WEBPACK_IMPORTED_MODULE_21__components_Tappable_Tappable__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_Touch_Touch__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Touch", function() { return __WEBPACK_IMPORTED_MODULE_22__components_Touch_Touch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_ConfigProvider_ConfigProvider__ = __webpack_require__(35);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigProvider", function() { return __WEBPACK_IMPORTED_MODULE_23__components_ConfigProvider_ConfigProvider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_Alert_Alert__ = __webpack_require__(30);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return __WEBPACK_IMPORTED_MODULE_24__components_Alert_Alert__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_AndroidClose_AndroidClose__ = __webpack_require__(32);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AndroidClose", function() { return __WEBPACK_IMPORTED_MODULE_25__components_AndroidClose_AndroidClose__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_ActionSheet_ActionSheet__ = __webpack_require__(29);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSheet", function() { return __WEBPACK_IMPORTED_MODULE_26__components_ActionSheet_ActionSheet__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSheetItem", function() { return __WEBPACK_IMPORTED_MODULE_26__components_ActionSheet_ActionSheet__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_AlertInput_AlertInput__ = __webpack_require__(31);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AlertInput", function() { return __WEBPACK_IMPORTED_MODULE_27__components_AlertInput_AlertInput__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_Gallery_Gallery__ = __webpack_require__(40);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Gallery", function() { return __WEBPACK_IMPORTED_MODULE_28__components_Gallery_Gallery__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_Spinner_Spinner__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return __WEBPACK_IMPORTED_MODULE_29__components_Spinner_Spinner__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_ScreenSpinner_ScreenSpinner__ = __webpack_require__(47);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenSpinner", function() { return __WEBPACK_IMPORTED_MODULE_30__components_ScreenSpinner_ScreenSpinner__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__lib_classnames__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "classnames", function() { return __WEBPACK_IMPORTED_MODULE_31__lib_classnames__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__lib_keyframes__ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return __WEBPACK_IMPORTED_MODULE_32__lib_keyframes__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__lib_offset__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getOffsetRect", function() { return __WEBPACK_IMPORTED_MODULE_33__lib_offset__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__lib_platform__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "platform", function() { return __WEBPACK_IMPORTED_MODULE_34__lib_platform__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ANDROID", function() { return __WEBPACK_IMPORTED_MODULE_34__lib_platform__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "IOS", function() { return __WEBPACK_IMPORTED_MODULE_34__lib_platform__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__lib_removeObjectKeys__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "removeObjectKeys", function() { return __WEBPACK_IMPORTED_MODULE_35__lib_removeObjectKeys__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__helpers_getClassName__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getClassName", function() { return __WEBPACK_IMPORTED_MODULE_36__helpers_getClassName__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__helpers_wrapTextNode__ = __webpack_require__(54);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "wrapTextNode", function() { return __WEBPACK_IMPORTED_MODULE_37__helpers_wrapTextNode__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__lib_requestAnimationFrame__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "requestAnimationFrame", function() { return __WEBPACK_IMPORTED_MODULE_38__lib_requestAnimationFrame__["a"]; });
/**
 * Layout
 */














/**
 * Forms
 */









/**
 * Behavior
 */




/**
 * Misc
 */








/**
 * Utils
 */









var v = process.env.VKUI_VERSION;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(8)))

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = animate;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__requestAnimationFrame__ = __webpack_require__(6);


function animate(options) {
  if (typeof window === 'undefined') {
    return;
  }

  var start = window.performance.now();

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__requestAnimationFrame__["a" /* default */])(function animate(time) {
    var timeFraction = (time - start) / options.duration;

    if (timeFraction > 1) {
      timeFraction = 1;
    }

    var progress = options.timing(timeFraction);

    options.draw(progress);

    if (timeFraction < 1) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__requestAnimationFrame__["a" /* default */])(animate);
    }
  });
}

/***/ }),
/* 60 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 61 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 62 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 63 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 64 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 65 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 66 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 67 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 68 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 69 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 70 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 71 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 72 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 73 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 74 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 75 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 76 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 77 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 78 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 79 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 80 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 81 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 82 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 83 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 84 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 85 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 86 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 87 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 88 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 89 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 90 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 91 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),
/* 92 */
/***/ (function(module, exports) {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;


/***/ }),
/* 93 */
/***/ (function(module, exports) {

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

module.exports = asciiWords;


/***/ }),
/* 94 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

module.exports = basePropertyOf;


/***/ }),
/* 95 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(14),
    arrayMap = __webpack_require__(90),
    isArray = __webpack_require__(114),
    isSymbol = __webpack_require__(116);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(95);

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

module.exports = castSlice;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var castSlice = __webpack_require__(97),
    hasUnicode = __webpack_require__(26),
    stringToArray = __webpack_require__(108),
    toString = __webpack_require__(10);

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

module.exports = createCaseFirst;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var arrayReduce = __webpack_require__(91),
    deburr = __webpack_require__(113),
    words = __webpack_require__(118);

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]";

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

module.exports = createCompounder;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var basePropertyOf = __webpack_require__(94);

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 's'
};

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

module.exports = deburrLetter;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(126)))

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(106);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(14);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 104 */
/***/ (function(module, exports) {

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

module.exports = hasUnicodeWord;


/***/ }),
/* 105 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 106 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(101);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var asciiToArray = __webpack_require__(92),
    hasUnicode = __webpack_require__(26),
    unicodeToArray = __webpack_require__(109);

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

module.exports = stringToArray;


/***/ }),
/* 109 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

module.exports = unicodeToArray;


/***/ }),
/* 110 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsOrdLower = '\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)',
    rsOrdUpper = '\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
  rsUpper + '+' + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

module.exports = unicodeWords;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var capitalize = __webpack_require__(112),
    createCompounder = __webpack_require__(99);

/**
 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 * @example
 *
 * _.camelCase('Foo Bar');
 * // => 'fooBar'
 *
 * _.camelCase('--foo-bar--');
 * // => 'fooBar'
 *
 * _.camelCase('__FOO_BAR__');
 * // => 'fooBar'
 */
var camelCase = createCompounder(function(result, word, index) {
  word = word.toLowerCase();
  return result + (index ? capitalize(word) : word);
});

module.exports = camelCase;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__(10),
    upperFirst = __webpack_require__(117);

/**
 * Converts the first character of `string` to upper case and the remaining
 * to lower case.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * _.capitalize('FRED');
 * // => 'Fred'
 */
function capitalize(string) {
  return upperFirst(toString(string).toLowerCase());
}

module.exports = capitalize;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var deburrLetter = __webpack_require__(100),
    toString = __webpack_require__(10);

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;

/** Used to compose unicode capture groups. */
var rsCombo = '[' + rsComboRange + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

module.exports = deburr;


/***/ }),
/* 114 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(25),
    getPrototype = __webpack_require__(102),
    isObjectLike = __webpack_require__(27);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(25),
    isObjectLike = __webpack_require__(27);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var createCaseFirst = __webpack_require__(98);

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

module.exports = upperFirst;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var asciiWords = __webpack_require__(93),
    hasUnicodeWord = __webpack_require__(104),
    toString = __webpack_require__(10),
    unicodeWords = __webpack_require__(110);

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

module.exports = words;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(13);
  var warning = __webpack_require__(24);
  var ReactPropTypesSecret = __webpack_require__(15);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(12);
var invariant = __webpack_require__(13);
var ReactPropTypesSecret = __webpack_require__(15);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(12);
var invariant = __webpack_require__(13);
var warning = __webpack_require__(24);
var assign = __webpack_require__(119);

var ReactPropTypesSecret = __webpack_require__(15);
var checkPropTypes = __webpack_require__(120);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ANIMATABLE_VALUES = ['columnCount', 'columnGap', 'columnRule', 'columnRuleColor', 'columnRuleWidth', 'columns', 'flex', 'flexBasis', 'flexGrow', 'flexShrink', 'order', 'perspective', 'perspectiveOrigin', 'perspectiveOriginX', 'perspectiveOriginY', 'scrollSnapCoordinate', 'scrollSnapDirection', 'textDecoration', 'textDecorationColor', 'transform', 'transformOrigin', 'transformOriginX', 'transformOriginY', 'transformOriginZ', 'transformStyle'];

var CSS_PROPERTIES = ['alignContent', 'alignItems', 'alignSelf', 'animation', 'animationDelay', 'animationDirection', 'animationDuration', 'animationFillMode', 'animationIterationCount', 'animationName', 'animationPlayState', 'animationTimingFunction', 'appearance', 'aspectRatio', 'backfaceVisibility', 'backgroundClip', 'borderImage', 'borderImageSlice', 'boxShadow', 'columnCount', 'columnFill', 'columnGap', 'columnRule', 'columnRuleColor', 'columnRuleStyle', 'columnRuleWidth', 'columnSpan', 'columnWidth', 'columns', 'flex', 'flexBasis', 'flexDirection', 'flexFlow', 'flexGrow', 'flexShrink', 'flexWrap', 'fontFeatureSettings', 'fontKearning', 'fontVariantLigatures', 'justifyContent', 'grid', 'gridArea', 'gridAutoColumns', 'gridAutoFlow', 'gridAutoRows', 'gridColumn', 'gridColumnEnd', 'gridColumnStart', 'gridRow', 'gridRowEnd', 'gridRowStart', 'gridTemplate', 'gridTemplateAreas', 'gridTemplateColumns', 'gridTemplateRows', 'hyphens', 'lineBreak', 'perspective', 'perspectiveOrigin', 'perspectiveOriginX', 'perspectiveOriginY', 'rubyPosition', 'scrollSnapCoordinate', 'scrollSnapDestination', 'scrollSnapPoints', 'scrollSnapPointsX', 'scrollSnapPointsY', 'scrollSnapType', 'tabSize', 'textDecoration', 'textDecorationColor', 'textDecorationLine', 'textDecorationStyle', 'textOrientation', 'textSizeAdjust', 'transform', 'transition', 'transformOrigin', 'transformOriginX', 'transformOriginY', 'transformOriginZ', 'transformStyle', 'transitionProperty', 'transitionDuration', 'transitionTimingFunction', 'transitionDelay', 'userModify', 'userSelect'];

exports.ANIMATABLE_VALUES = ANIMATABLE_VALUES;
exports.CSS_PROPERTIES = CSS_PROPERTIES;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var prefixObject = {
  css: '',
  js: ''
};

if (typeof window !== 'undefined') {
  var styles = window.getComputedStyle(document.documentElement);

  var prefixString = Array.prototype.slice.call(styles).join('');
  var standardPrefixString = prefixString.match(/-(moz|webkit|ms)-/);
  var operaPrefixString = prefixString.match(styles.OLink === '' && ['', 'o']);
  var prefixMatch = standardPrefixString || operaPrefixString;

  var prefix = prefixMatch ? prefixMatch[1] : '';

  prefixObject = {
    css: '-' + prefix + '-',
    js: prefix
  };

  if (prefixObject.js !== 'ms') {
    prefixObject = _extends({}, prefixObject, {
      js: '' + prefixObject.js.charAt(0).toUpperCase() + prefixObject.js.slice(1)
    });
  }
}

exports.default = prefixObject;
module.exports = exports['default'];

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _camelCase = __webpack_require__(111);

var _camelCase2 = _interopRequireDefault(_camelCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * is the property supported, or is the value supported for the given property
 * 
 * @param {string} property
 * @param {number|string} value
 * @returns {boolean}
 */
var isSupported = function isSupported(property, value) {
  // Try the native standard method first
  if ('CSS' in window && 'supports' in window.CSS) {
    return window.CSS.supports(property, value);
  }

  // Check Opera's native method
  if ('supportsCSS' in window) {
    return window.supportsCSS(property, value);
  }

  // Convert to camel-case for DOM interactions
  var camelCaseProperty = (0, _camelCase2.default)(property);

  // Check if the property is supported
  var element = document.createElement('div');
  var support = camelCaseProperty in element.style;

  // Assign the property and value to invoke the CSS interpreter
  element.style.cssText = property + ':' + value;

  // Ensure both the property and value are
  // supported and return
  return support && element.style[camelCaseProperty] !== '';
};

exports.default = isSupported;
module.exports = exports['default'];

/***/ }),
/* 126 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);
});
//# sourceMappingURL=vkui.js.map